// ── SUNLYTICS lang.js ─────────────────────────────────────────────────────────
// Shared EN / LV translations for all public pages.
// Usage: include this file, then call initLang() on DOMContentLoaded.

const TRANSLATIONS = {
    en: {
        // ── NAV ──────────────────────────────────────────────────
        nav_how:      'How it Works',
        nav_pricing:  'Pricing',
        nav_about:    'About',
        nav_drone:    'Drone Status',
        nav_fly:      'Fly for Us',
        nav_contact:  'Contact',
        nav_pilot:    'Pilot Login',
        nav_cta:      'Free Analysis',

        // ── CONTACT PAGE ─────────────────────────────────────────
        contact_tag:      'Contact Us',
        contact_h1_pre:   'Get In',
        contact_h1_span:  'Touch',
        contact_hero_p:   'Have questions about solar analysis or want to order a drone report? We are here to help.',
        contact_info_h2:  'Just send us a message',
        info_email_h:     'Email Us',
        info_based_h:     'Based In',
        info_drone_h:     'Drone Coverage',
        info_drone_p:     'Latvia & Baltic Region',
        info_response_h:  'Response Time',
        info_response_p:  'Within a few hours on business days',
        form_h3:          'Send Us a Message',
        form_p:           'Fill in the form and we will get back to you as soon as possible.',
        form_name_lbl:    'Full Name',
        form_email_lbl:   'Email Address',
        form_phone_lbl:   'Phone (optional)',
        form_subject_lbl: 'Subject',
        form_msg_lbl:     'Message',
        form_submit:      'Send Message',
        form_name_ph:     'Your full name',
        form_email_ph:    'your@email.com',
        form_phone_ph:    '+371 ...',
        form_msg_ph:      'Tell us how we can help you...',

        // ── TERMS & PRIVACY ──────────────────────────────────────
        terms_h1:       'Terms of Service',
        terms_updated:  'Last updated: January 2026',
        privacy_h1:     'Privacy Policy',
        privacy_updated:'Last updated: January 2026',
    },

    lv: {
        // ── NAV ──────────────────────────────────────────────────
        nav_how:      'Kā tas darbojas',
        nav_pricing:  'Cenas',
        nav_about:    'Par mums',
        nav_drone:    'Drona statuss',
        nav_fly:      'Lido mums',
        nav_contact:  'Kontakti',
        nav_pilot:    'Pilota pieteikšanās',
        nav_cta:      'Bezmaksas analīze',

        // ── CONTACT PAGE ─────────────────────────────────────────
        contact_tag:      'Kontaktējiet mūs',
        contact_h1_pre:   'Sazināties',
        contact_h1_span:  'ar mums',
        contact_hero_p:   'Vai jums ir jautājumi par saules analīzi vai vēlaties pasūtīt drona pārskatu? Mēs esam šeit, lai palīdzētu.',
        contact_info_h2:  'Vienkārši nosūtiet mums ziņu',
        info_email_h:     'Rakstiet mums',
        info_based_h:     'Atrašanās vieta',
        info_drone_h:     'Drona pārklājums',
        info_drone_p:     'Latvija un Baltijas reģions',
        info_response_h:  'Atbildes laiks',
        info_response_p:  'Dažu stundu laikā darba dienās',
        form_h3:          'Nosūtiet mums ziņu',
        form_p:           'Aizpildiet veidlapu un mēs sazināsimies ar jums pēc iespējas ātrāk.',
        form_name_lbl:    'Pilns vārds',
        form_email_lbl:   'E-pasta adrese',
        form_phone_lbl:   'Tālrunis (pēc izvēles)',
        form_subject_lbl: 'Temats',
        form_msg_lbl:     'Ziņojums',
        form_submit:      'Nosūtīt ziņu',
        form_name_ph:     'Jūsu pilns vārds',
        form_email_ph:    'jusu@epasts.lv',
        form_phone_ph:    '+371 ...',
        form_msg_ph:      'Pastāstiet, kā mēs varam jums palīdzēt...',

        // ── TERMS & PRIVACY ──────────────────────────────────────
        terms_h1:       'Pakalpojumu sniegšanas noteikumi',
        terms_updated:  'Pēdējo reizi atjaunināts: 2026. gada janvārī',
        privacy_h1:     'Privātuma politika',
        privacy_updated:'Pēdējo reizi atjaunināts: 2026. gada janvārī',
    }
};

// ── CORE FUNCTIONS ────────────────────────────────────────────────────────────

function setLang(lang) {
    localStorage.setItem('sunlytics-lang', lang);

    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

    // Translate all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // Translate placeholders [data-i18n-ph]
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Update active state on lang buttons
    const btnEN = document.getElementById('langEN');
    const btnLV = document.getElementById('langLV');
    if (btnEN) btnEN.classList.toggle('active', lang === 'en');
    if (btnLV) btnLV.classList.toggle('active', lang === 'lv');

    // Store on <html> for CSS hooks
    document.documentElement.lang = lang;
}

function initLang() {
    const saved = localStorage.getItem('sunlytics-lang') || 'en';
    setLang(saved);
}
