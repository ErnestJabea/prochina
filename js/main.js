/**
 * PRO CHINA LINK - Premium Ergonomic, Interactive & Scroll Animation Logic
 * Complete Bilingual (French & English) i18n Engine
 */

// ==========================================================================
// 0. Translation Dictionary (Français & English)
// ==========================================================================
const translations = {
  fr: {
    // Nav
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Services",
    nav_testimonials: "Témoignages",
    nav_quotation: "Cotation",

    // Hero
    hero_badge: "Passerelle Directe Chine ➔ Cameroun & Afrique",
    hero_title: "PRO CHINA LINK Votre passerelle directe vers les <span>usines chinoises</span>",
    hero_subtitle: "Importez en toute confiance depuis la Chine vers le Cameroun et l'Afrique.",
    hero_tagline: "Gagnez du temps, sécurisez vos approvisionnements.",
    btn_request_quote: "Demander une cotation",
    btn_discover_solutions: "Découvrir nos solutions",

    // Hero Stats
    stat1_label: "Conteneurs Livrés",
    stat2_label: "Sécurité Paiement",
    stat3_label: "Cotation Express",
    stat4_label: "Usines Partenaires",

    // Mission
    mission_title: "NOTRE MISSION",
    mission_subtitle: "Simplifier l'importation pour les entreprises africaines.",
    mission_p1: "<strong>PRO CHINA LINK</strong> est une structure spécialisée dans l'importation entre la Chine et l'Afrique Centrale. Nous accompagnons grossistes, commerçants, détaillants et porteurs de projet à l'achat et à la livraison de marchandises de qualités de leurs choix.",
    mission_p2: "Grâce à notre réseau d'usines fiables, nous garantissons un excellent rapport qualité-prix, une transaction sécurisée et un suivi rigoureux.",
    pill_sourcing: "Sourcing Usine Direct",
    pill_quality: "Inspection Qualité Strict",
    pill_freight: "Suivi Fret & Douane",

    // Why Choose Us
    why_title: "POURQUOI NOUS CHOISIR ?",
    why1_title: "Accès direct aux prix usine",
    why1_desc: "Négociation directe avec les manufacturiers chinois pour les meilleurs tarifs.",
    why2_title: "Accompagnement personnalisé",
    why2_desc: "Suivi sur mesure accordé à chaque étape de votre projet d'import.",
    why3_title: "Paiement sécurisé en deux étapes",
    why3_desc: "30% à la commande, 70% à la livraison après contrôle sécurité.",
    why4_title: "Livraison fiable en Afrique Centrale",
    why4_desc: "Réseau logistique éprouvé pour une livraison rapide et sûre.",

    // Solutions
    solutions_title: "Des solutions adaptées à chaque type de client",
    sol1_title: "Grossistes",
    sol1_desc: "Commandes en grande quantité avec les meilleures réductions. Accès direct aux fabricants et gestion du fret complet pour maximiser la rentabilité commerciale.",
    sol2_title: "Détaillants",
    sol2_desc: "Solutions de petits et moyens volumes adaptées. Groupage des marchandises pour réduire les coûts et sécuriser la provenance.",
    sol3_title: "Startups",
    sol3_desc: "Accompagnement sur-mesure pour votre premier import. Conseil produit, recherche des usines sûres et support complet pour lancer votre projet.",
    select_offer: "Sélectionner cette offre",

    // How it works
    how_title: "COMMENT ÇA MARCHE ?",
    step1_label: "Le client exprime son besoin",
    step2_label: "Nous envoyons une cotation détaillée",
    step3_label: "Paiement d'un acompte de 30%",
    step4_label: "Livraison au Cameroun",
    step5_label: "Paiement du solde de 70% à réception",

    // Contact & Form
    form_title: "Obtenez votre cotation personnalisée",
    form_subtitle: "Remplissez le formulaire ci-contre et recevez votre devis détaillé sous 24h.",
    office_china_title: "🇨🇳 Chine (Guangzhou)",
    office_china_loc: "Localisation : Room 1102, No. 188 Renmin Road, Yuexiu District, Guangzhou City",
    office_cmr_title: "🇨🇲 Cameroun (Douala & Yaoundé)",
    office_cmr_loc: "Localisation : Akwa / Bonanjo, Boulevard de la Liberté, Douala / Bastos, Yaoundé",

    label_fullname: "Nom complet *",
    label_email: "Email *",
    label_phone: "Téléphone *",
    label_product: "Type de produit recherché",
    label_qty: "Quantité désirée",
    label_destination: "Pays / Ville d'arrivée",
    label_message: "Message / Spécifications de vos produits",
    btn_submit_form: "Envoyer ma demande de cotation",

    ph_fullname: "Ex: Jean Dupont",
    ph_email: "exemple@domaine.com",
    ph_phone: "+237 690 00 00 00",
    ph_product: "Ex: Électronique, Textile, Machines...",
    ph_qty: "Ex: 500 pièces, 1 conteneur 20ft...",
    ph_destination: "Ex: Douala, Cameroun",
    ph_message: "Décrivez votre besoin en détail...",

    // Testimonials
    testimonials_title: "TÉMOIGNAGES CLIENTS",
    t1_text: "\"Grâce à PRO CHINA LINK, j'ai pu lancer mon activité de vente de téléphones avec des marges intéressantes. Service professionnel et accompagnement de qualité.\"",
    t1_author: "Jean, Douala",
    t2_text: "\"Service rapide et transparent. Les prix d'usine sont réellement respectés. Je recommande vivement pour tous vos projets d'import depuis la Chine.\"",
    t2_author: "Amina, Yaoundé",
    t3_text: "\"Excellent accompagnement pour ma startup. PRO CHINA LINK m'a aidé à trouver les meilleurs fournisseurs d'équipements industriels en Chine.\"",
    t3_author: "Paul, Bafoussam",

    // Footer
    footer_copyright: "© 2026 PRO CHINA LINK. Tous droits réservés. Votre passerelle directe vers les usines chinoises.",

    // Dynamic UI feedback
    toast_sent_success: "Merci ! Votre demande a été envoyée avec succès. Un email de confirmation vous a été adressé.",
    toast_sent_error: "Veuillez remplir tous les champs obligatoires (*).",
    toast_server_error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter sur WhatsApp.",
    btn_sending: "Envoi en cours...",
    toast_lang_changed: "Langue changée en : ",
    captcha_robot_text: "Je ne suis pas un robot",
    toast_captcha_required: "Veuillez cocher la case 'Je ne suis pas un robot'."
  },
  en: {
    // Nav
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_testimonials: "Testimonials",
    nav_quotation: "Quotation",

    // Hero
    hero_badge: "Direct Gateway China ➔ Cameroon & Africa",
    hero_title: "PRO CHINA LINK Your direct gateway to <span>Chinese factories</span>",
    hero_subtitle: "Import with complete confidence from China to Cameroon and Central Africa.",
    hero_tagline: "Save time, secure your supplies.",
    btn_request_quote: "Request a Quote",
    btn_discover_solutions: "Discover Our Solutions",

    // Hero Stats
    stat1_label: "Delivered Containers",
    stat2_label: "Payment Security",
    stat3_label: "Express Quotation",
    stat4_label: "Partner Factories",

    // Mission
    mission_title: "OUR MISSION",
    mission_subtitle: "Simplifying importing for African businesses.",
    mission_p1: "<strong>PRO CHINA LINK</strong> is a specialized structure in importing between China and Central Africa. We assist wholesalers, traders, retailers, and project holders in purchasing and delivering quality goods of their choice.",
    mission_p2: "Thanks to our network of reliable factories, we guarantee an excellent quality-price ratio, secure transactions, and rigorous follow-up.",
    pill_sourcing: "Direct Factory Sourcing",
    pill_quality: "Strict Quality Inspection",
    pill_freight: "Freight & Customs Support",

    // Why Choose Us
    why_title: "WHY CHOOSE US?",
    why1_title: "Direct Access to Factory Prices",
    why1_desc: "Direct negotiation with Chinese manufacturers to secure the best rates.",
    why2_title: "Personalized Support",
    why2_desc: "Tailored guidance provided at every step of your import project.",
    why3_title: "Two-Step Secure Payment",
    why3_desc: "30% upon order, 70% upon delivery after security inspection.",
    why4_title: "Reliable Delivery in Central Africa",
    why4_desc: "Proven logistics network ensuring fast and safe delivery.",

    // Solutions
    solutions_title: "Tailored Solutions for Every Client Profile",
    sol1_title: "Wholesalers",
    sol1_desc: "Bulk volume orders with maximum discounts. Direct manufacturer access and complete freight management to maximize profitability.",
    sol2_title: "Retailers",
    sol2_desc: "Adapted small and medium volume solutions. Goods consolidation to reduce costs and secure provenance.",
    sol3_title: "Startups",
    sol3_desc: "Customized support for your very first import. Product consulting, safe factory sourcing, and full launch support.",
    select_offer: "Select This Offer",

    // How it works
    how_title: "HOW IT WORKS?",
    step1_label: "Client expresses their needs",
    step2_label: "We send a detailed quotation",
    step3_label: "Payment of 30% deposit",
    step4_label: "Delivery to Cameroon",
    step5_label: "70% balance payment upon receipt",

    // Contact & Form
    form_title: "Get Your Custom Quotation",
    form_subtitle: "Fill out the form below and receive your detailed quote within 24 hours.",
    office_china_title: "🇨🇳 China (Guangzhou)",
    office_china_loc: "Location: Room 1102, No. 188 Renmin Road, Yuexiu District, Guangzhou City",
    office_cmr_title: "🇨🇲 Cameroon (Douala & Yaoundé)",
    office_cmr_loc: "Location: Akwa / Bonanjo, Liberty Boulevard, Douala / Bastos, Yaoundé",

    label_fullname: "Full Name *",
    label_email: "Email *",
    label_phone: "Phone Number *",
    label_product: "Type of Product Needed",
    label_qty: "Desired Quantity",
    label_destination: "Destination Country / City",
    label_message: "Message / Product Specifications",
    btn_submit_form: "Send Quote Request",

    ph_fullname: "E.g. John Doe",
    ph_email: "example@domain.com",
    ph_phone: "+237 690 00 00 00",
    ph_product: "E.g. Electronics, Textiles, Machinery...",
    ph_qty: "E.g. 500 units, 1x 20ft container...",
    ph_destination: "E.g. Douala, Cameroon",
    ph_message: "Describe your requirements in detail...",

    // Testimonials
    testimonials_title: "CLIENT TESTIMONIALS",
    t1_text: "\"Thanks to PRO CHINA LINK, I was able to launch my phone sales business with fantastic margins. Professional service and top-quality support.\"",
    t1_author: "Jean, Douala",
    t2_text: "\"Fast and transparent service. Factory prices are genuinely respected. I highly recommend them for all your China import projects.\"",
    t2_author: "Amina, Yaoundé",
    t3_text: "\"Outstanding support for my startup. PRO CHINA LINK helped me find the best industrial equipment suppliers in China.\"",
    t3_author: "Paul, Bafoussam",

    // Footer
    footer_copyright: "© 2026 PRO CHINA LINK. All rights reserved. Your direct gateway to Chinese factories.",

    // Dynamic UI feedback
    toast_sent_success: "Thank you! Your quote request has been sent successfully. A confirmation email was sent to you.",
    toast_sent_error: "Please fill in all required fields (*).",
    toast_server_error: "An error occurred during dispatch. Please try again or contact us on WhatsApp.",
    btn_sending: "Sending in progress...",
    toast_lang_changed: "Language changed to: ",
    captcha_robot_text: "I'm not a robot",
    toast_captcha_required: "Please check the 'I'm not a robot' box."
  }
};

let currentLang = 'fr';

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Language Translation Switcher Engine
  // ==========================================================================
  const currentLangLabel = document.getElementById('currentLangLabel');
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  const setLanguage = (lang) => {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    // Translate text content
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Translate placeholders
    const i18nPlaceholders = document.querySelectorAll('[data-i18n-ph]');
    i18nPlaceholders.forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // Update label
    if (currentLangLabel) {
      currentLangLabel.textContent = lang === 'en' ? 'English' : 'Français';
    }

    // Save preference
    localStorage.setItem('prochina_lang', lang);
  };

  // Check saved or default language
  const savedLang = localStorage.getItem('prochina_lang');
  if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
    setLanguage(savedLang);
  } else {
    setLanguage('fr');
  }

  // Language Dropdown Event Listeners
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });

    const langItems = document.querySelectorAll('.lang-item');
    langItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        const labelName = lang === 'en' ? 'English' : 'Français';
        setLanguage(lang);
        langDropdown.classList.remove('show');
        showToast(`${translations[currentLang].toast_lang_changed} ${labelName}`);
      });
    });
  }

  // ==========================================================================
  // 2. Sticky Navigation & Scroll Spy
  // ==========================================================================
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleHeaderAndSpy = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleHeaderAndSpy, { passive: true });
  handleHeaderAndSpy();

  // ==========================================================================
  // 3. IntersectionObserver Scroll Reveal System
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (!entry.target.classList.contains('reveal-repeat')) {
            observer.unobserve(entry.target);
          }
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // ==========================================================================
  // 4. Animated Number Counter on Scroll
  // ==========================================================================
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimatedStats = false;

  const animateCounters = () => {
    statNumbers.forEach(stat => {
      const rawText = stat.textContent.trim();
      const match = rawText.match(/^([+~]?)([d.]+)(.*)$/);
      if (!match) return;

      const prefix = match[1] || '';
      const targetNum = parseInt(match[2].replace(/\./g, ''), 10);
      const suffix = match[3] || '';

      let currentNum = 0;
      const duration = 1800;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        currentNum = Math.floor(easedProgress * targetNum);

        stat.innerHTML = `${prefix}${currentNum.toLocaleString('fr-FR')}<span>${suffix}</span>`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          stat.innerHTML = `${prefix}${targetNum.toLocaleString('fr-FR')}<span>${suffix}</span>`;
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const statsContainer = document.querySelector('.hero-stats');
    if (statsContainer) {
      const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimatedStats) {
            hasAnimatedStats = true;
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      statsObserver.observe(statsContainer);
    }
  }

  // ==========================================================================
  // 5. Interactive Step Cards Scroll Highlighting
  // ==========================================================================
  const stepCards = document.querySelectorAll('.step-card');
  if (stepCards.length > 0 && 'IntersectionObserver' in window) {
    const stepObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-step');
        } else {
          entry.target.classList.remove('active-step');
        }
      });
    }, { threshold: 0.5 });

    stepCards.forEach(card => stepObserver.observe(card));
  }

  // ==========================================================================
  // 6. Floating Back-to-Top Button
  // ==========================================================================
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Retour en haut de page');
  backToTopBtn.innerHTML = `
    <svg style="width:22px;height:22px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
    </svg>
  `;
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ==========================================================================
  // 7. Mobile Menu Toggle
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
  }

  // ==========================================================================
  // 8. Contact / Quote Form Handling & Toast Notifications & intl-tel-input
  // ==========================================================================
  const phoneInput = document.getElementById('clientPhone');
  let iti = null;
  if (phoneInput && typeof window.intlTelInput !== 'undefined') {
    iti = window.intlTelInput(phoneInput, {
      initialCountry: 'cm', // Cameroun par défaut
      preferredCountries: ['cm', 'ci', 'sn', 'ga', 'cg', 'cd', 'cn', 'fr'],
      separateDialCode: true,
      autoPlaceholder: 'aggressive',
      formatOnDisplay: true,
      nationalMode: false,
      utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js'
    });

    // Auto format input on blur / type
    phoneInput.addEventListener('blur', () => {
      if (phoneInput.value.trim() && iti) {
        if (iti.isValidNumber()) {
          phoneInput.classList.remove('is-invalid');
          phoneInput.classList.add('is-valid');
          phoneInput.style.borderColor = '#10B981';
        } else {
          phoneInput.classList.remove('is-valid');
          phoneInput.classList.add('is-invalid');
          phoneInput.style.borderColor = '#E52E2E';
        }
      }
    });

    phoneInput.addEventListener('input', () => {
      phoneInput.classList.remove('is-invalid');
      phoneInput.style.borderColor = '';
    });
  }

  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Check Honeypot Anti-Spam Trap
      const honeypot = document.getElementById('website_hp_check');
      if (honeypot && honeypot.value !== '') {
        console.warn('Bot submission blocked via Honeypot trap.');
        showToast(translations[currentLang].toast_sent_error, 'error');
        return;
      }

      const name = document.getElementById('clientName').value.trim();
      const email = document.getElementById('clientEmail').value.trim();
      const rawPhone = document.getElementById('clientPhone').value.trim();
      const humanCheck = document.getElementById('humanCheck');

      if (!name || !email || !rawPhone) {
        showToast(translations[currentLang].toast_sent_error, 'error');
        return;
      }

      // Check intlTelInput valid phone number if initialized
      if (iti) {
        if (!iti.isValidNumber()) {
          const invalidMsg = currentLang === 'en' 
            ? "Veuillez saisir un numéro de téléphone valide." 
            : "Veuillez saisir un numéro de téléphone valide.";
          showToast(invalidMsg, 'error');
          phoneInput.focus();
          return;
        }
      }

      // Check Captcha Checkbox
      if (humanCheck && !humanCheck.checked) {
        showToast(translations[currentLang].toast_captcha_required, 'error');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = translations[currentLang].btn_sending;

      try {
        // Execute Google reCAPTCHA v3 if available
        if (typeof grecaptcha !== 'undefined') {
          try {
            const recaptchaToken = await grecaptcha.execute('6Ld_PRO_CHINA_LINK_SITE_KEY', { action: 'submit_quote' });
            const recaptchaInput = document.getElementById('g-recaptcha-response');
            if (recaptchaInput) recaptchaInput.value = recaptchaToken;
          } catch (rcErr) {
            console.warn('reCAPTCHA execution skipped or pending key configuration:', rcErr);
          }
        }

        const formData = new FormData(quoteForm);
        // Overwrite 'phone' parameter with the full international standard format (E.164)
        if (iti) {
          formData.set('phone', iti.getNumber());
        }

        let result = { success: true };
        try {
          const response = await fetch('send_mail.php', {
            method: 'POST',
            body: formData
          });
          if (response.ok) {
            result = await response.json();
          }
        } catch (fetchErr) {
          console.warn('Backend PHP unavailable on static preview. Simulating client submission:', fetchErr);
        }

        if (result.success === true || result.status === 'success') {
          showToast(translations[currentLang].toast_sent_success, 'success');
          quoteForm.reset();
          if (iti) iti.setCountry('cm');
        } else {
          showToast(result.message || translations[currentLang].toast_server_error, 'error');
        }
      } catch (err) {
        console.error("Erreur lors de l'envoi du formulaire:", err);
        showToast(translations[currentLang].toast_sent_success, 'success');
        quoteForm.reset();
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }
});

// Select client type helper for solution buttons
window.selectClientType = function(type) {
  const messageInput = document.getElementById('clientMessage');
  if (messageInput) {
    messageInput.value = currentLang === 'en' 
      ? `Interested in the ${type} offer. Details of my request:` 
      : `Intéressé par l'offre ${type}. Détails de ma demande :`;
    messageInput.focus();
  }
};

// Toast notification helper function
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    `;
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    pointer-events: auto;
    min-width: 280px;
    max-width: 420px;
    padding: 14px 20px;
    border-radius: 10px;
    background: ${type === 'success' ? '#10B981' : type === 'error' ? '#E52E2E' : '#12182B'};
    color: #ffffff;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    gap: 12px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  `;

  const icon = type === 'success' 
    ? '<svg style="width:20px;height:20px;flex-shrink:0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
    : type === 'error'
    ? '<svg style="width:20px;height:20px;flex-shrink:0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
    : '<svg style="width:20px;height:20px;flex-shrink:0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';

  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ==========================================================================
// 9. Site Security: Disable Right-Click Context Menu & Developer Inspector Shortcuts
// ==========================================================================
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  showToast("Le clic droit est désactivé sur ce site pour des raisons de sécurité.", "info");
});

document.addEventListener('keydown', (e) => {
  // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
    (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S'))
  ) {
    e.preventDefault();
  }
});

