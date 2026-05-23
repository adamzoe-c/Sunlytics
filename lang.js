/**
 * Sunlytics — Shared Language System
 * Works across all pages. Safe to use with any existing JS.
 * Usage: add <script src="lang.js"></script> before </body>
 * Tag elements with data-i18n="key" or data-i18n-ph="key" for placeholders.
 */

const TRANSLATIONS = {
    en: {
        // ── NAV ──────────────────────────────────────────────────
        nav_how:        'How it Works',
        nav_pricing:    'Pricing',
        nav_about:      'About',
        nav_drone:      'Drone Status',
        nav_fly:        'Fly for Us',
        nav_cta:        'Free Analysis',
        nav_contact:    'Contact Us',

        // ── INDEX — Hero ─────────────────────────────────────────
        hero_badge:     '🛰 Satellite-Powered Solar Analysis',
        hero_h1_a:      "Know Your Roof's",
        hero_h1_b:      'Solar Potential',
        hero_h1_c:      'Instantly',
        hero_p:         'Get a free AI-powered solar feasibility report in 60 seconds. No signup, no payment — just enter your address.',
        hero_btn_primary:   'Get Free Analysis',
        hero_btn_secondary: 'See How It Works',

        // ── INDEX — How it Works ──────────────────────────────────
        how_tag:        'Simple Process',
        how_h2_a:       'Three Steps to',
        how_h2_b:       'Solar Clarity',
        how_step1_h:    'Enter Your Address',
        how_step1_p:    'Type your building address and our AI instantly pulls satellite data for your exact location.',
        how_step2_h:    'Get Instant Results',
        how_step2_p:    'Receive your free solar feasibility score, estimated savings, payback period, and system size.',
        how_step3_h:    'Get Full Drone Report',
        how_step3_p:    'Order a certified drone inspection for a professional PDF report delivered within 24 hours.',

        // ── INDEX — Calculator ────────────────────────────────────
        calc_h2:        'Enter Your Building Address',
        calc_btn:       'Analyse My Roof',
        calc_placeholder: 'e.g. Brīvības iela 1, Riga',

        // ── INDEX — Pricing ───────────────────────────────────────
        pricing_tag:    'Simple Pricing',
        pricing_h2_a:   'Start Free,',
        pricing_h2_b:   'Go Deeper When Ready',
        pricing_free_name:  'Free Analysis',
        pricing_free_price: '€0',
        pricing_free_desc:  'Instant satellite-based solar report',
        pricing_drone_name: 'Drone Report',
        pricing_drone_price:'€149',
        pricing_drone_desc: 'Full certified drone inspection + PDF',

        // ── INDEX — Modal ─────────────────────────────────────────
        modal_loading_h:    'Analysing Your Roof...',
        modal_loading_p:    'Pulling satellite data and calculating solar potential',
        modal_report_title: 'Solar Feasibility Report',
        modal_score_label:  'SOLAR UTILISATION SCORE',
        modal_area_label:   'USABLE AREA',
        modal_payback_label:'PAYBACK PERIOD',
        modal_profit_label: '25-YEAR PROFIT',
        modal_savings_label:'ANNUAL SAVINGS',
        modal_system_label: 'SYSTEM SIZE',
        modal_prod_label:   'ANNUAL PRODUCTION',
        modal_drone_h:      'Want 100% Accurate Results?',
        modal_drone_p:      'Our certified drone operators will physically inspect your roof and deliver a professional PDF report within 24 hours.',
        modal_drone_btn:    'Order Drone Report — €149',
        modal_partner_tag:  'Certified Installation Partner',
        modal_partner_p:    'Our certified installation partner will visit your property, physically confirm your results, and provide a no-obligation installation quote — completely free.',
        modal_partner_btn:  'Get Free Installation Quote',
        modal_close:        'Close — Analyse Another Address',
        modal_drone_form_h: 'Order Your Drone Report',
        modal_drone_form_p: 'Fill in your details and we will contact you within a few hours to confirm your appointment',
        modal_back:         'Back to Results',
        modal_form_name:    'Full Name',
        modal_form_email:   'Email Address',
        modal_form_phone:   'Phone Number',
        modal_form_address: 'Property Address',
        modal_form_submit:  'Confirm Order — €149',
        modal_form_note:    'You will not be charged now. We will contact you to confirm details and arrange payment.',

        // ── INDEX — Testimonials ──────────────────────────────────
        testi_tag:      'Reviews',
        testi_h2_a:     'What Our',
        testi_h2_b:     'Customers',
        testi_h2_c:     'Say',
        testi_sub:      'Real feedback from homeowners and businesses across Latvia',

        // ── INDEX — FAQ ───────────────────────────────────────────
        faq_tag:        'FAQ',
        faq_h2_a:       'Common',
        faq_h2_b:       'Questions',
        faq_sub:        'Everything you need to know before getting started',
        faq_q1: 'How accurate is the free satellite analysis?',
        faq_a1: 'The free analysis uses real Latvian solar irradiance data (PVGIS/EU JRC) and is accurate to within 10–15% for most properties. For 100% precision — including exact roof dimensions, shading, and structural details — order our professional drone report.',
        faq_q2: 'How does the drone get access to my roof?',
        faq_a2: 'Our certified drone operators fly above your property from public airspace — no ladders, no scaffolding, no access required inside your home. The drone captures high-resolution imagery of your roof from above. You just need to be available to confirm the appointment.',
        faq_q3: 'How long does the drone report take?',
        faq_a3: 'Once the drone flight is completed, your professional PDF report is delivered within 24 hours directly to your email. Scheduling the flight itself typically takes 1–2 business days depending on weather conditions.',
        faq_q4: 'What if the weather is bad on the day of the flight?',
        faq_a4: 'We monitor wind speed, rain probability, and temperature before every flight. If conditions are unsuitable we will reschedule at no extra cost. You can also check our live drone status widget on the homepage.',
        faq_q5: 'Is my data safe and GDPR compliant?',
        faq_a5: 'Yes. We collect only the data necessary to provide our service (your address and contact details). We never sell your data to third parties. All data is processed in compliance with EU GDPR regulations. See our Privacy Policy for full details.',
        faq_q6: 'Do I have to pay anything upfront?',
        faq_a6: 'The online solar analysis is completely free — no card required. For the drone report (€149), you are not charged until we confirm your appointment and you approve. Payment is arranged directly with our team.',
        faq_q7: 'What does the partner installation quote involve?',
        faq_a7: 'Our partner SolarPro Latvia will visit your property for a free physical inspection, confirm the findings from your Sunlytics report, and provide a no-obligation quote for the full solar panel installation. There is no commitment to proceed.',

        // ── INDEX — Partner ───────────────────────────────────────
        partner_tag:    'Certified Partner',
        partner_h2_a:   'Ready to',
        partner_h2_b:   'Install?',
        partner_sub:    'Your solar report is just the first step. Our certified installation partner will turn your analysis into reality.',
        partner_btn:    'Get Your Free Installation Quote',
        partner_note:   'No payment required. A SolarPro Latvia advisor will contact you within 24 hours.',

        // ── INDEX — Cookie ────────────────────────────────────────
        cookie_h:       'We use cookies',
        cookie_p:       'We use cookies to improve your experience and analyse site usage. By continuing you agree to our',
        cookie_policy:  'Privacy Policy',
        cookie_decline: 'Decline',
        cookie_accept:  'Accept All',

        // ── CONTACT page ──────────────────────────────────────────
        contact_tag:        'Contact Us',
        contact_h1_pre:     'Get In',
        contact_h1_span:    'Touch',
        contact_hero_p:     'Have questions about solar analysis or want to order a drone report? We are here to help.',
        contact_info_h2:    'We Would Love to Hear From You',
        info_email_h:       'Email Us',
        info_based_h:       'Based In',
        info_drone_h:       'Drone Coverage',
        info_drone_p:       'Latvia & Baltic Region',
        info_response_h:    'Response Time',
        info_response_p:    'Within a few hours on business days',
        form_h3:            'Send Us a Message',
        form_p:             'Fill in your details and we will get back to you shortly',
        form_name_lbl:      'Full Name',
        form_name_ph:       'Your full name',
        form_email_lbl:     'Email Address',
        form_email_ph:      'your@email.com',
        form_phone_lbl:     'Phone Number',
        form_phone_ph:      '+371 ...',
        form_subject_lbl:   'Subject',
        form_msg_lbl:       'Message',
        form_msg_ph:        'Tell us how we can help you...',
        form_submit:        'Send Message',

        // ── PRIVACY & TERMS ───────────────────────────────────────
        privacy_h1:         'Privacy Policy',
        privacy_updated:    'Last updated: May 2026',
        terms_h1:           'Terms of Service',
        terms_updated:      'Last updated: May 2026',

        // ── FOOTER ───────────────────────────────────────────────
        footer_tagline:     'AI-powered solar analysis for Latvia and the Baltic region.',
        footer_col_product: 'Product',
        footer_col_company: 'Company',
        footer_col_legal:   'Legal',
        footer_rights:      '© 2026 Sunlytics. All rights reserved.',
        footer_gdpr:        'GDPR Compliant',
    },

    lv: {
        // ── NAV ──────────────────────────────────────────────────
        nav_how:        'Kā tas strādā',
        nav_pricing:    'Cenas',
        nav_about:      'Par mums',
        nav_drone:      'Drona statuss',
        nav_fly:        'Lido mums',
        nav_cta:        'Bezmaksas analīze',
        nav_contact:    'Sazināties',

        // ── INDEX — Hero ─────────────────────────────────────────
        hero_badge:     '🛰 Satelītu enerģijas analīze',
        hero_h1_a:      'Uzzini sava jumta',
        hero_h1_b:      'Saules potenciālu',
        hero_h1_c:      'Uzreiz',
        hero_p:         'Saņem bezmaksas AI saules enerģijas atskaiti 60 sekundēs. Nav reģistrācijas, nav maksas — tikai ievadi adresi.',
        hero_btn_primary:   'Bezmaksas analīze',
        hero_btn_secondary: 'Kā tas strādā',

        // ── INDEX — How it Works ──────────────────────────────────
        how_tag:        'Vienkāršs process',
        how_h2_a:       'Trīs soļi līdz',
        how_h2_b:       'Saules skaidrībai',
        how_step1_h:    'Ievadi adresi',
        how_step1_p:    'Ievadi ēkas adresi un mūsu AI uzreiz iegūst satelītu datus tavai atrašanās vietai.',
        how_step2_h:    'Saņem rezultātus',
        how_step2_p:    'Saņem bezmaksas saules enerģijas novērtējumu, aprēķinātos ietaupījumus un sistēmas izmēru.',
        how_step3_h:    'Pilna drona atskaite',
        how_step3_p:    'Pasūti sertificētu drona inspekciju ar profesionālu PDF atskaiti 24 stundu laikā.',

        // ── INDEX — Calculator ────────────────────────────────────
        calc_h2:        'Ievadi ēkas adresi',
        calc_btn:       'Analizēt manu jumtu',
        calc_placeholder: 'piem. Brīvības iela 1, Rīga',

        // ── INDEX — Pricing ───────────────────────────────────────
        pricing_tag:    'Vienkāršas cenas',
        pricing_h2_a:   'Sāc bez maksas,',
        pricing_h2_b:   'Dziļāk, kad esi gatavs',
        pricing_free_name:  'Bezmaksas analīze',
        pricing_free_price: '€0',
        pricing_free_desc:  'Tūlītēja satelītu saules enerģijas atskaite',
        pricing_drone_name: 'Drona atskaite',
        pricing_drone_price:'€149',
        pricing_drone_desc: 'Pilna sertificēta drona inspekcija + PDF',

        // ── INDEX — Modal ─────────────────────────────────────────
        modal_loading_h:    'Analizē tavu jumtu...',
        modal_loading_p:    'Iegūstam satelītu datus un aprēķinām saules potenciālu',
        modal_report_title: 'Saules enerģijas iespējamības atskaite',
        modal_score_label:  'SAULES IZMANTOŠANAS RĀDĪTĀJS',
        modal_area_label:   'IZMANTOJAMĀ PLATĪBA',
        modal_payback_label:'ATMAKSĀŠANĀS PERIODS',
        modal_profit_label: '25 GADU PEĻŅA',
        modal_savings_label:'GADA IETAUPĪJUMI',
        modal_system_label: 'SISTĒMAS IZMĒRS',
        modal_prod_label:   'GADA RAŽOŠANA',
        modal_drone_h:      'Vēlies 100% precīzus rezultātus?',
        modal_drone_p:      'Mūsu sertificētie drona operatori fiziski pārbaudīs tavu jumtu un piegādās profesionālu PDF atskaiti 24 stundu laikā.',
        modal_drone_btn:    'Pasūtīt drona atskaiti — €149',
        modal_partner_tag:  'Sertificēts uzstādīšanas partneris',
        modal_partner_p:    'Mūsu sertificētais partneris apmeklēs tavu īpašumu, fiziski apstiprinās rezultātus un sniegs bezmaksas instalācijas piedāvājumu bez saistībām.',
        modal_partner_btn:  'Saņemt bezmaksas instalācijas piedāvājumu',
        modal_close:        'Aizvērt — analizēt citu adresi',
        modal_drone_form_h: 'Pasūtīt drona atskaiti',
        modal_drone_form_p: 'Aizpildi savus datus un mēs sazināsimies dažu stundu laikā, lai apstiprinātu tikšanos',
        modal_back:         'Atpakaļ uz rezultātiem',
        modal_form_name:    'Pilns vārds',
        modal_form_email:   'E-pasta adrese',
        modal_form_phone:   'Tālruņa numurs',
        modal_form_address: 'Īpašuma adrese',
        modal_form_submit:  'Apstiprināt pasūtījumu — €149',
        modal_form_note:    'Maksa netiks iekasēta tagad. Mēs sazināsimies, lai apstiprinātu detaļas un vienotos par maksājumu.',

        // ── INDEX — Testimonials ──────────────────────────────────
        testi_tag:      'Atsauksmes',
        testi_h2_a:     'Ko saka mūsu',
        testi_h2_b:     'Klienti',
        testi_h2_c:     '',
        testi_sub:      'Īstas atsauksmes no māju īpašniekiem un uzņēmumiem visā Latvijā',

        // ── INDEX — FAQ ───────────────────────────────────────────
        faq_tag:        'BUJ',
        faq_h2_a:       'Biežāk uzdotie',
        faq_h2_b:       'jautājumi',
        faq_sub:        'Viss, kas jāzina pirms sākt',
        faq_q1: 'Cik precīza ir bezmaksas satelītu analīze?',
        faq_a1: 'Bezmaksas analīze izmanto reālus Latvijas saules starojuma datus (PVGIS/ES JRC) un ir precīza ar ±10–15% kļūdas robežu. Pilnīgai precizitātei — ieskaitot jumta izmērus, ēnojumu un konstrukcijas datus — pasūti profesionālo drona atskaiti.',
        faq_q2: 'Kā drons piekļūst manam jumtam?',
        faq_a2: 'Mūsu sertificētie drona operatori lido virs tava īpašuma no publiskās gaisa telpas — nav nepieciešamas kāpnes, sastatnes vai piekļuve mājai. Drons uzņem augstas izšķirtspējas attēlus no augšas. Tev tikai jābūt pieejamam, lai apstiprinātu tikšanos.',
        faq_q3: 'Cik ilgi aizņem drona atskaite?',
        faq_a3: 'Pēc drona lidojuma profesionālā PDF atskaite tiek piegādāta 24 stundu laikā uz tavu e-pastu. Lidojuma plānošana parasti aizņem 1–2 darba dienas atkarībā no laika apstākļiem.',
        faq_q4: 'Ko darīt, ja lidojuma dienā ir slikts laiks?',
        faq_a4: 'Mēs uzraugām vēja ātrumu, lietus varbūtību un temperatūru pirms katra lidojuma. Ja apstākļi nav piemēroti, mēs pārplānosim bez papildu maksas. Vari arī pārbaudīt mūsu tiešraides drona statusa logrīku mājaslapā.',
        faq_q5: 'Vai mani dati ir droši un atbilst VDAR?',
        faq_a5: 'Jā. Mēs apkopojam tikai pakalpojuma sniegšanai nepieciešamos datus (tava adrese un kontaktinformācija). Mēs nekad nepārdodam tavus datus trešajām pusēm. Visi dati tiek apstrādāti saskaņā ar ES VDAR noteikumiem.',
        faq_q6: 'Vai man kaut kas jāmaksā avansā?',
        faq_a6: 'Tiešsaistes saules analīze ir pilnīgi bezmaksas — karte nav nepieciešama. Par drona atskaiti (€149) maksa tiek iekasēta tikai pēc tikšanās apstiprināšanas. Maksājums tiek noorganizēts tieši ar mūsu komandu.',
        faq_q7: 'Ko ietver partnera instalācijas piedāvājums?',
        faq_a7: 'Mūsu partneris SolarPro Latvia apmeklēs tavu īpašumu bezmaksas fiziskai inspekcijai, apstiprinās Sunlytics atskaites rezultātus un sniegs bezobligāciju piedāvājumu pilnai saules paneļu instalācijai.',

        // ── INDEX — Partner ───────────────────────────────────────
        partner_tag:    'Sertificēts partneris',
        partner_h2_a:   'Gatavs',
        partner_h2_b:   'Uzstādīt?',
        partner_sub:    'Tava saules enerģijas atskaite ir tikai pirmais solis. Mūsu sertificētais partneris pārvērtīs analīzi realitātē.',
        partner_btn:    'Saņemt bezmaksas instalācijas piedāvājumu',
        partner_note:   'Maksa nav nepieciešama. SolarPro Latvia konsultants sazināsies 24 stundu laikā.',

        // ── INDEX — Cookie ────────────────────────────────────────
        cookie_h:       'Mēs izmantojam sīkdatnes',
        cookie_p:       'Mēs izmantojam sīkdatnes, lai uzlabotu tavu pieredzi un analizētu vietnes lietošanu. Turpinot piekrīti mūsu',
        cookie_policy:  'Privātuma politikai',
        cookie_decline: 'Noraidīt',
        cookie_accept:  'Pieņemt visas',

        // ── CONTACT page ──────────────────────────────────────────
        contact_tag:        'Sazināties',
        contact_h1_pre:     'Sazinies',
        contact_h1_span:    'ar mums',
        contact_hero_p:     'Vai ir jautājumi par saules analīzi vai vēlies pasūtīt drona atskaiti? Mēs esam šeit, lai palīdzētu.',
        contact_info_h2:    'Mēs labprāt dzirdēsim no tevis',
        info_email_h:       'Raksti mums',
        info_based_h:       'Atrodamies',
        info_drone_h:       'Drona pārklājums',
        info_drone_p:       'Latvija un Baltijas reģions',
        info_response_h:    'Atbildes laiks',
        info_response_p:    'Dažu stundu laikā darba dienās',
        form_h3:            'Nosūtīt ziņu',
        form_p:             'Aizpildi savus datus un mēs atbildēsim drīzumā',
        form_name_lbl:      'Pilns vārds',
        form_name_ph:       'Tavs pilns vārds',
        form_email_lbl:     'E-pasta adrese',
        form_email_ph:      'tavs@epasts.lv',
        form_phone_lbl:     'Tālruņa numurs',
        form_phone_ph:      '+371 ...',
        form_subject_lbl:   'Temats',
        form_msg_lbl:       'Ziņa',
        form_msg_ph:        'Pastāsti, kā varam palīdzēt...',
        form_submit:        'Nosūtīt ziņu',

        // ── PRIVACY & TERMS ───────────────────────────────────────
        privacy_h1:         'Privātuma politika',
        privacy_updated:    'Pēdējo reizi atjaunināts: Maijs 2026',
        terms_h1:           'Pakalpojumu sniegšanas noteikumi',
        terms_updated:      'Pēdējo reizi atjaunināts: Maijs 2026',

        // ── FOOTER ───────────────────────────────────────────────
        footer_tagline:     'AI saules enerģijas analīze Latvijai un Baltijas reģionam.',
        footer_col_product: 'Produkts',
        footer_col_company: 'Uzņēmums',
        footer_col_legal:   'Juridiskā informācija',
        footer_rights:      '© 2026 Sunlytics. Visas tiesības aizsargātas.',
        footer_gdpr:        'VDAR atbilstošs',
    }
};

// ── Core engine ──────────────────────────────────────────────────────────────

function setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    localStorage.setItem('sunlytics_lang', lang);
    applyLang(lang);
}

function applyLang(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    // 1. Text content: data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // 2. Placeholder: data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    // 3. Active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById('lang' + lang.toUpperCase());
    if (activeBtn) activeBtn.classList.add('active');

    // 4. html lang attribute
    document.documentElement.lang = lang;

    // 5. Re-render FAQ if on index page (FAQ is JS-generated)
    if (typeof renderFaq === 'function') renderFaq(lang);
}

function initLang() {
    const saved = localStorage.getItem('sunlytics_lang') || 'en';
    applyLang(saved);
}

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', initLang);
