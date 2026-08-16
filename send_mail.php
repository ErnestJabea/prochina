<?php
/**
 * PRO CHINA LINK - Secured Dual-Email Handler & Anti-Spam Processor
 * Features:
 * - Security HTTP Headers & CORS Scoping
 * - Anti-Spam Layer 1: Honeypot Trap
 * - Anti-Spam Layer 2: IP Rate Limiting (3 requests / 10 minutes)
 * - Anti-Spam Layer 3: Google reCAPTCHA Verification (v2 / v3)
 * - Input Sanitization & Anti-Header Injection Protection
 * - Dual HTML Email Dispatch (Admin Notification + Client Acknowledgment)
 */

// --------------------------------------------------------------------------
// 1. SECURITY RESPONSE HEADERS
// --------------------------------------------------------------------------
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: strict-origin-when-cross-origin');

// Allow POST only
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit;
}

// --------------------------------------------------------------------------
// 2. INPUT ACQUISITION & HONEYPOT SPAM TRAP
// --------------------------------------------------------------------------
$inputData = json_decode(file_get_contents('php://input'), true);
if (!$inputData || !is_array($inputData)) {
    $inputData = $_POST;
}

// Honeypot Trap Check: Bots that fill this hidden field are blocked immediately
if (!empty($inputData['website_hp_check'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Soumission suspecte détectée (Honeypot).']);
    exit;
}

// --------------------------------------------------------------------------
// 3. IP RATE LIMITER (Anti-Flooding: Max 3 requests / 10 minutes per IP)
// --------------------------------------------------------------------------
$clientIp = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rateLimitDir = __DIR__ . '/scratch/ratelimit';
if (!is_dir($rateLimitDir)) {
    @mkdir($rateLimitDir, 0755, true);
}
$rateLimitFile = $rateLimitDir . '/' . md5($clientIp) . '.json';
$now = time();
$window = 600; // 10 minutes
$maxRequests = 3;

if (file_exists($rateLimitFile)) {
    $rateData = json_decode(file_get_contents($rateLimitFile), true);
    if (is_array($rateData)) {
        // Filter out timestamps outside window
        $rateData = array_filter($rateData, function($timestamp) use ($now, $window) {
            return ($now - $timestamp) < $window;
        });

        if (count($rateData) >= $maxRequests) {
            http_response_code(429);
            echo json_encode([
                'success' => false, 
                'message' => 'Trop de demandes envoyées en peu de temps. Veuillez réespacer vos envois de 10 minutes.'
            ]);
            exit;
        }
    } else {
        $rateData = [];
    }
} else {
    $rateData = [];
}
$rateData[] = $now;
@file_put_contents($rateLimitFile, json_encode(array_values($rateData)));

// --------------------------------------------------------------------------
// 4. GOOGLE reCAPTCHA VERIFICATION (v2 / v3)
// --------------------------------------------------------------------------
$recaptchaSecretKey = '6Ld_PRO_CHINA_LINK_SECRET_KEY'; // Replace with production secret key
$recaptchaResponse = $inputData['g-recaptcha-response'] ?? '';

if (!empty($recaptchaSecretKey) && $recaptchaSecretKey !== '6Ld_PRO_CHINA_LINK_SECRET_KEY' && !empty($recaptchaResponse)) {
    $verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    $verifyData = [
        'secret'   => $recaptchaSecretKey,
        'response' => $recaptchaResponse,
        'remoteip' => $clientIp
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($verifyData),
            'timeout' => 5
        ]
    ];
    $context = stream_context_create($options);
    $verifyResult = @file_get_contents($verifyUrl, false, $context);

    if ($verifyResult !== false) {
        $jsonResult = json_decode($verifyResult, true);
        if (isset($jsonResult['success']) && !$jsonResult['success']) {
            http_response_code(403);
            echo json_encode(['success' => false, 'message' => 'Échec de vérification reCAPTCHA anti-robot.']);
            exit;
        }
    }
}

// --------------------------------------------------------------------------
// 5. INPUT SANITIZATION & ANTI-HEADER INJECTION
// --------------------------------------------------------------------------
function sanitizeHeaderInput($data) {
    return preg_replace('/[\r\n]+/', '', trim($data));
}

function sanitizeBodyInput($data) {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

$rawName = $inputData['name'] ?? '';
$rawEmail = $inputData['email'] ?? '';
$rawPhone = $inputData['phone'] ?? '';

$name = sanitizeHeaderInput($rawName);
$email = sanitizeHeaderInput($rawEmail);
$phone = sanitizeHeaderInput($rawPhone);
$product_type = sanitizeBodyInput($inputData['product_type'] ?? 'Non spécifié');
$product_qty = sanitizeBodyInput($inputData['product_qty'] ?? 'Non spécifiée');
$destination = sanitizeBodyInput($inputData['destination'] ?? 'Non spécifiée');
$message = sanitizeBodyInput($inputData['message'] ?? 'Aucun message particulier.');

// Strict Email Validation
if (empty($name) || empty($email) || empty($phone) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Veuillez saisir des informations valides (Nom, Email valide, Téléphone).']);
    exit;
}

$phoneRaw = preg_replace('/[^0-9]/', '', $phone);
$adminEmail = 'prochinalink@gmail.com';

// Logo Base64 inline
$logoPath = __DIR__ . '/assets/images/logo.png';
if (file_exists($logoPath)) {
    $logoUrl = 'data:image/png;base64,' . base64_encode(file_get_contents($logoPath));
} else {
    $logoUrl = 'assets/images/logo.png';
}

// --------------------------------------------------------------------------
// 6. ADMIN NOTIFICATION EMAIL DISPATCH
// --------------------------------------------------------------------------
$adminSubject = "📥 [PRO CHINA LINK] Nouvelle demande de cotation de " . $name;
$adminTemplatePath = __DIR__ . '/email_template.html';

if (file_exists($adminTemplatePath)) {
    $adminHtml = file_get_contents($adminTemplatePath);
    $adminHtml = str_replace(
        ['{{LOGO_URL}}', '{{NAME}}', '{{EMAIL}}', '{{PHONE}}', '{{PHONE_RAW}}', '{{PRODUCT_TYPE}}', '{{PRODUCT_QTY}}', '{{DESTINATION}}', '{{MESSAGE}}'],
        [$logoUrl, htmlspecialchars($name), htmlspecialchars($email), htmlspecialchars($phone), $phoneRaw, $product_type, $product_qty, $destination, nl2br($message)],
        $adminHtml
    );
} else {
    $adminHtml = "<h2>Nouvelle Demande de Cotation PRO CHINA LINK</h2><p><strong>Nom:</strong> " . htmlspecialchars($name) . "</p>";
}

$adminHeaders  = "MIME-Version: 1.0\r\n";
$adminHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
$adminHeaders .= "From: PRO CHINA LINK Web <noreply@prochinalink.com>\r\n";
$adminHeaders .= "Reply-To: {$name} <{$email}>\r\n";
$adminHeaders .= "X-Mailer: PHP/" . phpversion();

$adminMailSent = @mail($adminEmail, $adminSubject, $adminHtml, $adminHeaders);

// --------------------------------------------------------------------------
// 7. CLIENT ACKNOWLEDGMENT EMAIL DISPATCH
// --------------------------------------------------------------------------
$clientSubject = "✅ [PRO CHINA LINK] Accusé de réception de votre demande de cotation";
$clientTemplatePath = __DIR__ . '/acknowledgment_template.html';

if (file_exists($clientTemplatePath)) {
    $clientHtml = file_get_contents($clientTemplatePath);
    $clientHtml = str_replace(
        ['{{LOGO_URL}}', '{{NAME}}', '{{EMAIL}}', '{{PHONE}}', '{{PHONE_RAW}}', '{{PRODUCT_TYPE}}', '{{PRODUCT_QTY}}', '{{DESTINATION}}', '{{MESSAGE}}'],
        [$logoUrl, htmlspecialchars($name), htmlspecialchars($email), htmlspecialchars($phone), $phoneRaw, $product_type, $product_qty, $destination, nl2br($message)],
        $clientHtml
    );
} else {
    $clientHtml = "<h2>Accusé de réception PRO CHINA LINK</h2><p>Bonjour " . htmlspecialchars($name) . ", nous avons bien reçu votre demande.</p>";
}

$clientHeaders  = "MIME-Version: 1.0\r\n";
$clientHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
$clientHeaders .= "From: PRO CHINA LINK <noreply@prochinalink.com>\r\n";
$clientHeaders .= "Reply-To: PRO CHINA LINK <prochinalink@gmail.com>\r\n";
$clientHeaders .= "X-Mailer: PHP/" . phpversion();

$clientMailSent = @mail($email, $clientSubject, $clientHtml, $clientHeaders);

// Log request locally for backup safety
$logLine = date('Y-m-d H:i:s') . " | Name: {$name} | Email: {$email} | Phone: {$phone} | Product: {$product_type} | Qty: {$product_qty} | Destination: {$destination}\n";
@file_put_contents(__DIR__ . '/quote_requests.log', $logLine, FILE_APPEND);

// --------------------------------------------------------------------------
// 8. FINAL JSON RESPONSE
// --------------------------------------------------------------------------
echo json_encode([
    'success'    => true,
    'status'     => 'success',
    'admin_mail' => $adminMailSent,
    'client_mail'=> $clientMailSent,
    'message'    => 'Merci ! Votre demande de cotation a été envoyée avec succès.'
]);

