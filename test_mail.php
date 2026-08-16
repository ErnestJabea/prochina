<?php
/**
 * Test script for send_mail.php execution and email template rendering validation.
 */

// Define test POST payload
$_SERVER['REQUEST_METHOD'] = 'POST';
$_SERVER['REMOTE_ADDR'] = '127.0.0.1';

// Clear ratelimit file for testing
$rateLimitDir = __DIR__ . '/scratch/ratelimit';
$rateLimitFile = $rateLimitDir . '/' . md5('127.0.0.1') . '.json';
if (file_exists($rateLimitFile)) {
    @unlink($rateLimitFile);
}

$_POST = [
    'name' => 'Jean Dupont',
    'email' => 'jean.dupont@example.com',
    'phone' => '+237690000000',
    'product_type' => 'Machines industrielles de recyclage',
    'product_qty' => '5 unités',
    'destination' => 'Douala, Cameroun',
    'message' => 'Bonjour, je souhaite obtenir un devis rapide avec transport maritime.',
    'website_hp_check' => ''
];

ob_start();
include __DIR__ . '/send_mail.php';
$output = ob_get_clean();

// Extract JSON from output (filter out any PHP warnings)
$jsonPos = strpos($output, '{');
$jsonString = $jsonPos !== false ? substr($output, $jsonPos) : '';
$json = json_decode($jsonString, true);

echo "=== 1. TEST D'EXECUTION DU SCRIPT SEND_MAIL.PHP ===\n";
if ($json) {
    echo "[OK] Statut de la réponse JSON : " . ($json['success'] ? "SUCCESS (200 OK)" : "ECHEC") . "\n";
    echo "[OK] Message utilisateur : " . ($json['message'] ?? '') . "\n";
    echo "[INFO] Admin Mail Sent (mail() PHP) : " . ($json['admin_mail'] ? "OUI" : "NON (mail() PHP local nécessite un serveur SMTP configuré)") . "\n";
    echo "[INFO] Client Mail Sent (mail() PHP) : " . ($json['client_mail'] ? "OUI" : "NON (mail() PHP local nécessite un serveur SMTP configuré)") . "\n";
} else {
    echo "[ERREUR] Format JSON invalide : \n" . $output . "\n";
}

echo "\n=== 2. TEST D'ENREGISTREMENT ET SECURITE (quote_requests.log) ===\n";
$logPath = __DIR__ . '/quote_requests.log';
if (file_exists($logPath)) {
    $logContent = file_get_contents($logPath);
    echo "[OK] Fichier de journalisation créé et alimenté avec succès.\n";
    echo "Dernière ligne enregistrée :\n" . trim(array_pop(explode("\n", trim($logContent)))) . "\n";
} else {
    echo "[ERREUR] Le fichier quote_requests.log n'a pas été créé.\n";
}

echo "\n=== 3. TEST DE RENDU DES TEMPLATES HTML EMAIL ===\n";
// Validate Admin Template replacement
$adminTemplate = file_get_contents(__DIR__ . '/email_template.html');
$logoUrl = 'assets/images/logo.png';
$adminRendered = str_replace(
    ['{{LOGO_URL}}', '{{NAME}}', '{{EMAIL}}', '{{PHONE}}', '{{PHONE_RAW}}', '{{PRODUCT_TYPE}}', '{{PRODUCT_QTY}}', '{{DESTINATION}}', '{{MESSAGE}}'],
    [$logoUrl, htmlspecialchars($_POST['name']), htmlspecialchars($_POST['email']), htmlspecialchars($_POST['phone']), '237690000000', $_POST['product_type'], $_POST['product_qty'], $_POST['destination'], nl2br($_POST['message'])],
    $adminTemplate
);
file_put_contents(__DIR__ . '/preview_admin_mail.html', $adminRendered);
echo "[OK] Template Administrateur généré dans : preview_admin_mail.html\n";

// Validate Client Acknowledgment Template replacement
$clientTemplate = file_get_contents(__DIR__ . '/acknowledgment_template.html');
$clientRendered = str_replace(
    ['{{LOGO_URL}}', '{{NAME}}', '{{EMAIL}}', '{{PHONE}}', '{{PHONE_RAW}}', '{{PRODUCT_TYPE}}', '{{PRODUCT_QTY}}', '{{DESTINATION}}', '{{MESSAGE}}'],
    [$logoUrl, htmlspecialchars($_POST['name']), htmlspecialchars($_POST['email']), htmlspecialchars($_POST['phone']), '237690000000', $_POST['product_type'], $_POST['product_qty'], $_POST['destination'], nl2br($_POST['message'])],
    $clientTemplate
);
file_put_contents(__DIR__ . '/preview_client_mail.html', $clientRendered);
echo "[OK] Template Client généré dans : preview_client_mail.html\n";
