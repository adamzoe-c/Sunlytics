/* Sunlytics shared language switcher (EN / LT)
   Loaded by: about.html, contact.html, fly-for-us.html, upload-mission.html,
              privacy.html, terms.html, pilot-login.html
   Applies translations to every element with a [data-i18n] attribute. */

(function () {
  const i18n = {
    en: {
      // Nav (shared across all pages)
      nav_how: "How it Works",
      nav_pricing: "Pricing",
      nav_about: "About",
      nav_drone: "Drone Status",
      nav_fly: "Fly for Us",
      nav_pilot: "Pilot Login",
      nav_cta: "Free Analysis",
      nav_contact: "Contact Us",

      // Contact page
      contact_tag: "Contact Us",
      contact_h1_pre: "Get In",
      contact_h1_span: "Touch",
      contact_hero_p: "Have questions about solar analysis or want to order a drone report? We are here to help.",
      contact_info_h2: "Just send us a message",
      info_email_h: "Email Us",
      info_based_h: "Based In",
      info_drone_h: "Drone Coverage",
      info_drone_p: "Across Lithuania",
      info_response_h: "Response Time",
      info_response_p: "Within a few hours on business days",
      form_h3: "Send Us a Message",
      form_p: "Fill in your details and we will get back to you shortly",
      form_name_lbl: "Full Name",
      form_email_lbl: "Email Address",
      form_phone_lbl: "Phone Number",
      form_subject_lbl: "Subject",
      form_msg_lbl: "Message",
      form_submit: "Send Message",

      // Privacy / Terms headers
      privacy_h1: "Privacy Policy",
      privacy_updated: "Last updated: May 2026",
      terms_h1: "Terms of Service",
      terms_updated: "Last updated: May 2026",

      // Pilot login
      login_title: "Pilot Login",
      login_subtitle: "Sign in to your Sunlytics pilot dashboard",
      login_success: "Login successful! Redirecting...",
      label_email: "Email Address",
      label_password: "Password",
      forgot_password: "Forgot password?",
      btn_login: "Sign In",
      or_divider: "Don't have an account?",
      apply_link: "Apply to join the pilot network &#8594;",

      // Cookie consent banner
      cookie_text: 'We use cookies to improve your experience and analyze site traffic. By continuing, you agree to our <a href="privacy.html" style="color:#f7971e;text-decoration:underline;">Privacy Policy</a>.',
      cookie_decline: "Decline",
      cookie_accept: "Accept",
    },
    lt: {
      // Nav (shared across all pages)
      nav_how: "Kaip tai veikia",
      nav_pricing: "Kainos",
      nav_about: "Apie mus",
      nav_drone: "Drono statusas",
      nav_fly: "Skraidykite mums",
      nav_pilot: "Pilotų prisijungimas",
      nav_cta: "Nemokama analizė",
      nav_contact: "Susisiekite",

      // Contact page
      contact_tag: "Susisiekite",
      contact_h1_pre: "Susisiekite",
      contact_h1_span: "su mumis",
      contact_hero_p: "Turite klausimų apie saulės analizę arba norite užsakyti drono ataskaitą? Mes esame čia, kad padėtume.",
      contact_info_h2: "Tiesiog parašykite mums",
      info_email_h: "Rašykite mums",
      info_based_h: "Esame",
      info_drone_h: "Dronedekking",
      info_drone_p: "In heel Nederland",
      info_response_h: "Reactietijd",
      info_response_p: "Per kelias valandas darbo dienomis",
      form_h3: "Rašykite mums",
      form_p: "Užpildykite savo duomenis ir mes greitai su jumis susisieksime",
      form_name_lbl: "Pilnas vardas",
      form_email_lbl: "El. pašto adresas",
      form_phone_lbl: "Telefono numeris",
      form_subject_lbl: "Tema",
      form_msg_lbl: "Žinutė",
      form_submit: "Siųsti žinutę",

      // Privacy / Terms headers
      privacy_h1: "Privatumo politika",
      privacy_updated: "Paskutinį kartą atnaujinta: 2026 m. gegužė",
      terms_h1: "Naudojimo sąlygos",
      terms_updated: "Paskutinį kartą atnaujinta: 2026 m. gegužė",

      // Pilot login
      login_title: "Pilotų prisijungimas",
      login_subtitle: "Log in op uw Sunlytics pilotendashboard",
      login_success: "Prisijungimas sėkmingas! Nukreipiama...",
      label_email: "El. pašto adresas",
      label_password: "Slaptažodis",
      forgot_password: "Pamiršote slaptažodį?",
      btn_login: "Prisijungti",
      or_divider: "Neturite paskyros?",
      apply_link: "Prisijunkite prie pilotų tinklo &#8594;",

      // Cookie consent banner
      cookie_text: 'Mes naudojame slapukus, kad pagerintume jūsų patirtį ir analizuotume svetainės srautą. Tęsdami sutinkate su mūsų <a href="privacy.html" style="color:#f7971e;text-decoration:underline;">privatumo politika</a>.',
      cookie_decline: "Atmesti",
      cookie_accept: "Priimti",
    },
  };

  let currentLang = localStorage.getItem("lang") || "en";

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key] !== undefined) {
        el.innerHTML = i18n[lang][key];
      }
    });
    const enBtn = document.getElementById("langEN");
    const nlBtn = document.getElementById("langLT");
    if (enBtn) {
      enBtn.classList.toggle("active", lang === "en");
      enBtn.setAttribute("aria-pressed", lang === "en");
    }
    if (nlBtn) {
      nlBtn.classList.toggle("active", lang === "nl");
      nlBtn.setAttribute("aria-pressed", lang === "nl");
    }
    document.documentElement.setAttribute("lang", lang);
  }

  // Expose globally so onclick="setLang('lt')" in the HTML keeps working
  window.setLang = setLang;

  document.addEventListener("DOMContentLoaded", function () {
    setLang(currentLang);
  });
})();
