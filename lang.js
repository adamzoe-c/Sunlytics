/**
 * Sunlytics — shared translations (EN / LV)
 * Each key maps to { en: "...", lv: "..." }
 * Elements opt in with:  data-i18n="key"          → sets textContent
 *                        data-i18n-ph="key"        → sets placeholder
 *                        data-i18n-html="key"      → sets innerHTML (use sparingly)
 */
const TRANSLATIONS = {

  /* ── NAV ───────────────────────────────────────────── */
  nav_how:          { en: "How it Works",       lv: "Kā tas strādā" },
  nav_pricing:      { en: "Pricing",            lv: "Cenas" },
  nav_about:        { en: "About",              lv: "Par mums" },
  nav_contact:      { en: "Contact",            lv: "Kontakti" },
  nav_drone:        { en: "Drone Status",       lv: "Drona statuss" },
  nav_cta:          { en: "Free Analysis",      lv: "Bezmaksas analīze" },

  /* ── INDEX — HERO ──────────────────────────────────── */
  hero_badge:       { en: "Serving Latvia & Baltic Region &nbsp;&bull;&nbsp; Results in 60 Seconds",
                      lv: "Apkalpojam Latviju un Baltijas reģionu &nbsp;&bull;&nbsp; Rezultāti 60 sekundēs" },
  hero_h1_line1:    { en: "Know Your Roof's",   lv: "Uzzini sava jumta" },
  hero_h1_line2:    { en: "Solar Potential",    lv: "Saules enerģijas potenciālu" },
  hero_h1_line3:    { en: "Instantly",          lv: "Uzreiz" },
  hero_p:           { en: "Enter your address and receive a free AI-powered solar analysis in seconds. No engineers. No weeks of waiting. No cost.",
                      lv: "Ievadi adresi un saņem bezmaksas AI saules analīzi sekunžu laikā. Bez inženieriem. Bez nedēļu gaidīšanas. Bez maksas." },
  hero_btn_primary: { en: "Get Free Analysis",  lv: "Iegūt bezmaksas analīzi" },
  hero_btn_sec:     { en: "See How It Works",   lv: "Skatīt, kā tas strādā" },

  /* ── INDEX — TRUST BAR ─────────────────────────────── */
  trust_satellite:  { en: "Satellite-powered analysis", lv: "Satelīta analīze" },
  trust_drone:      { en: "Certified drone operators",  lv: "Sertificēti dronu operatori" },
  trust_gdpr:       { en: "GDPR compliant",             lv: "VDAR atbilstīgs" },
  trust_report:     { en: "Full report in 24 hours",    lv: "Pilns pārskats 24 stundu laikā" },

  /* ── INDEX — STATS ─────────────────────────────────── */
  stat_instant:     { en: "Instant Results",    lv: "Tūlītēji rezultāti" },
  stat_drone:       { en: "Full Drone Report",  lv: "Pilns drona pārskats" },
  stat_free:        { en: "Free Analysis",      lv: "Bezmaksas analīze" },
  stat_accuracy:    { en: "Accuracy Rate",      lv: "Precizitātes līmenis" },

  /* ── INDEX — HOW IT WORKS ──────────────────────────── */
  hiw_tag:          { en: "Process",            lv: "Process" },
  hiw_title:        { en: "How",                lv: "Kā" },
  hiw_title2:       { en: "Works",              lv: "Darbojas" },
  hiw_sub:          { en: "Three simple steps to complete solar clarity",
                      lv: "Trīs vienkārši soļi pilnīgai saules skaidrībai" },
  step1_h:          { en: "Enter Your Address", lv: "Ievadi savu adresi" },
  step1_p:          { en: "Type your building address anywhere in Latvia or the Baltic region. Our system instantly pulls satellite imagery of your roof.",
                      lv: "Ievadi ēkas adresi jebkur Latvijā vai Baltijas reģionā. Mūsu sistēma nekavējoties iegūst satelīta attēlus tavam jumtam." },
  step2_h:          { en: "Get Instant Results", lv: "Saņem tūlītējus rezultātus" },
  step2_p:          { en: "Receive your Solar Score, usable roof area, payback period and 25-year profit estimate — completely free, in seconds.",
                      lv: "Saņem savu Saules Rādītāju, izmantojamo jumta platību, atmaksāšanās periodu un 25 gadu peļņas aplēsi — pilnīgi bez maksas, sekunžu laikā." },
  step3_h:          { en: "Get Full Drone Report", lv: "Saņem pilnu drona pārskatu" },
  step3_p:          { en: "Want 100% accuracy? We dispatch a certified drone operator to your site and deliver a professional PDF report within 24 hours.",
                      lv: "Vēlies 100% precizitāti? Mēs nosūtām sertificētu drona operatoru uz tavu objektu un nogādājam profesionālu PDF pārskatu 24 stundu laikā." },

  /* ── INDEX — CALCULATOR ────────────────────────────── */
  calc_tag:         { en: "Free Tool",          lv: "Bezmaksas rīks" },
  calc_title:       { en: "Check Your",         lv: "Pārbaudi savu" },
  calc_title2:      { en: "Solar Potential",    lv: "Saules potenciālu" },
  calc_sub:         { en: "Instant analysis powered by satellite data — no signup needed",
                      lv: "Tūlītēja analīze, ko darbina satelīta dati — reģistrācija nav nepieciešama" },
  calc_h2:          { en: "Enter Your Building Address", lv: "Ievadi sava ēkas adresi" },
  calc_p:           { en: "Type your address or pick your location directly on the map",
                      lv: "Ievadi adresi vai izvēlies atrašanās vietu tieši kartē" },
  tab_text:         { en: "Type Address",       lv: "Ievadīt adresi" },
  tab_map:          { en: "Pick on Map",        lv: "Izvēlēties kartē" },
  addr_ph:          { en: "e.g. Brivibas iela 55, Riga, Latvia", lv: "piem. Brīvības iela 55, Rīga, Latvija" },
  analyze_btn:      { en: "Analyze My Roof",    lv: "Analizēt manu jumtu" },
  map_hint:         { en: "Click anywhere on the map to pin your property",
                      lv: "Noklikšķini jebkur kartē, lai atzīmētu savu īpašumu" },
  free_note:        { en: "✓ 100% Free &nbsp;&bull;&nbsp; No signup required &nbsp;&bull;&nbsp; Instant results",
                      lv: "✓ 100% Bezmaksas &nbsp;&bull;&nbsp; Reģistrācija nav vajadzīga &nbsp;&bull;&nbsp; Tūlītēji rezultāti" },

  /* ── INDEX — PRICING ───────────────────────────────── */
  pricing_tag:      { en: "Pricing",            lv: "Cenas" },
  pricing_title:    { en: "Simple,",            lv: "Vienkāršas," },
  pricing_title2:   { en: "Transparent",        lv: "Caurspīdīgas" },
  pricing_title3:   { en: "Pricing",            lv: "Cenas" },
  pricing_sub:      { en: "Start free, upgrade when you need full accuracy",
                      lv: "Sāc bez maksas, jaunina, kad nepieciešama pilna precizitāte" },
  plan1_name:       { en: "Instant Report",     lv: "Tūlītējs pārskats" },
  plan1_desc:       { en: "Perfect for getting a quick overview of your solar potential using satellite data.",
                      lv: "Ideāli, lai iegūtu ātru pārskatu par saules potenciālu, izmantojot satelīta datus." },
  plan1_f1:         { en: "Satellite-based roof analysis", lv: "Satelīta jumta analīze" },
  plan1_f2:         { en: "Solar Score & usable area",     lv: "Saules rādītājs un izmantojamā platība" },
  plan1_f3:         { en: "Estimated payback period",      lv: "Aprēķinātais atmaksāšanās periods" },
  plan1_f4:         { en: "25-year profit projection",     lv: "25 gadu peļņas prognoze" },
  plan1_f5:         { en: "No signup required",            lv: "Reģistrācija nav nepieciešama" },
  plan1_btn:        { en: "Get Free Analysis",  lv: "Iegūt bezmaksas analīzi" },
  plan2_badge:      { en: "Most Popular",       lv: "Vispopulārākais" },
  plan2_name:       { en: "Full Drone Report",  lv: "Pilns drona pārskats" },
  plan2_desc:       { en: "Full on-site drone inspection with a professional PDF report delivered in 24 hours.",
                      lv: "Pilna klātienes drona pārbaude ar profesionālu PDF pārskatu, kas piegādāts 24 stundu laikā." },
  plan2_f1:         { en: "Everything in free plan",       lv: "Viss no bezmaksas plāna" },
  plan2_f2:         { en: "Certified drone inspection",    lv: "Sertificēta drona pārbaude" },
  plan2_f3:         { en: "High-res roof imagery",         lv: "Augsta izšķirtspējas jumta attēli" },
  plan2_f4:         { en: "Accurate structural analysis",  lv: "Precīza strukturālā analīze" },
  plan2_f5:         { en: "Professional PDF report",       lv: "Profesionāls PDF pārskats" },
  plan2_f6:         { en: "Delivered within 24 hours",     lv: "Piegādāts 24 stundu laikā" },
  plan2_btn:        { en: "Order Drone Report", lv: "Pasūtīt drona pārskatu" },

  /* ── INDEX — WEATHER ───────────────────────────────── */
  weather_tag:      { en: "Live Status",        lv: "Tiešraides statuss" },
  weather_title:    { en: "Drone Flight",       lv: "Drona lidojuma" },
  weather_title2:   { en: "Weather Status",     lv: "Laika apstākļi" },
  weather_sub:      { en: "Real-time conditions for drone operations across the Baltic region",
                      lv: "Reāllaika apstākļi drona operācijām visā Baltijas reģionā" },
  weather_temp:     { en: "Temperature",        lv: "Temperatūra" },
  weather_wind:     { en: "Wind Speed",         lv: "Vēja ātrums" },
  weather_rain:     { en: "Rain Chance",        lv: "Lietus iespēja" },
  weather_note:     { en: "Weather data for Riga, Latvia. Drone flights are scheduled when wind is below 10 m/s, rain chance below 50%, and temperature above 0°C.",
                      lv: "Laika dati Rīgai, Latvija. Drona lidojumi tiek plānoti, kad vējš ir zem 10 m/s, lietus iespēja zem 50% un temperatūra virs 0°C." },
  drone_checking:   { en: "Checking conditions...",         lv: "Pārbauda apstākļus..." },
  drone_can_fly:    { en: "✅ Drone Can Fly Today",          lv: "✅ Drons šodien var lidot" },
  drone_no_fly:     { en: "❌ Drone Flight Not Recommended", lv: "❌ Drona lidojums nav ieteicams" },

  /* ── INDEX — COVERAGE ──────────────────────────────── */
  coverage_tag:     { en: "Coverage",           lv: "Pārklājums" },
  coverage_title:   { en: "Serving the",        lv: "Apkalpojam" },
  coverage_title2:  { en: "Baltic Region",      lv: "Baltijas reģionu" },
  coverage_sub:     { en: "Currently operating in Latvia with expansion across the Baltic states",
                      lv: "Pašlaik darbojas Latvijā ar paplašināšanos visās Baltijas valstīs" },
  lv_status:        { en: "Active Now",         lv: "Aktīvs tagad" },
  lt_status:        { en: "Coming Soon",        lv: "Drīzumā" },
  ee_status:        { en: "Coming Soon",        lv: "Drīzumā" },

  /* ── INDEX — TESTIMONIALS ──────────────────────────── */
  reviews_tag:      { en: "Reviews",            lv: "Atsauksmes" },
  reviews_title:    { en: "What Our",           lv: "Ko saka mūsu" },
  reviews_title2:   { en: "Customers",          lv: "Klienti" },
  reviews_title3:   { en: "Say",                lv: "" },
  reviews_sub:      { en: "Real feedback from homeowners and businesses across Latvia",
                      lv: "Īstas atsauksmes no māju īpašniekiem un uzņēmumiem visā Latvijā" },

  /* ── INDEX — FAQ ───────────────────────────────────── */
  faq_tag:          { en: "FAQ",                lv: "BUJ" },
  faq_title:        { en: "Common",             lv: "Bieži" },
  faq_title2:       { en: "Questions",          lv: "Uzdotie jautājumi" },
  faq_sub:          { en: "Everything you need to know before getting started",
                      lv: "Viss, kas jāzina pirms sākt" },

  /* ── INDEX — PARTNER ───────────────────────────────── */
  partner_tag:      { en: "Certified Partner",  lv: "Sertificēts partneris" },
  partner_title:    { en: "Ready to",           lv: "Gatavs" },
  partner_title2:   { en: "Install?",           lv: "Uzstādīt?" },
  partner_sub:      { en: "Your solar report is just the first step. Our certified installation partner will turn your analysis into reality.",
                      lv: "Tavs saules pārskats ir tikai pirmais solis. Mūsu sertificētais uzstādīšanas partneris pārvērtīs tavu analīzi realitātē." },
  partner_quote_btn:{ en: "Get Your Free Installation Quote", lv: "Iegūt bezmaksas uzstādīšanas piedāvājumu" },
  partner_note:     { en: "No payment required. A SolarPro Latvia advisor will contact you within 24 hours.",
                      lv: "Maksājums nav nepieciešams. SolarPro Latvia konsultants sazināsies ar tevi 24 stundu laikā." },

  /* ── INDEX — FOOTER ────────────────────────────────── */
  footer_brand_p:   { en: "Smart solar analysis for Latvia and the Baltic region. Fast, accurate, and affordable.",
                      lv: "Vieda saules analīze Latvijai un Baltijas reģionam. Ātra, precīza un pieejama." },
  footer_product:   { en: "Product",            lv: "Produkts" },
  footer_contact:   { en: "Contact",            lv: "Kontakti" },
  footer_copy:      { en: "© 2026 Sunlytics. All rights reserved.", lv: "© 2026 Sunlytics. Visas tiesības aizsargātas." },

  /* ── RESULTS MODAL ─────────────────────────────────── */
  modal_loading_h:  { en: "Analyzing Your Roof...", lv: "Analizē tavu jumtu..." },
  modal_loading_p:  { en: "Processing satellite imagery and solar data for your location",
                      lv: "Apstrādā satelīta attēlus un saules datus tavai atrašanās vietai" },
  modal_loading_note:{ en: "This usually takes a few seconds", lv: "Parasti tas aizņem dažas sekundes" },
  modal_report_tag: { en: "SUNLYTICS ANALYSIS", lv: "SUNLYTICS ANALĪZE" },
  modal_report_h:   { en: "Solar Feasibility Report", lv: "Saules enerģijas iespējamības pārskats" },
  modal_score_lbl:  { en: "Solar Utilization Score", lv: "Saules izmantošanas rādītājs" },
  modal_area_lbl:   { en: "Usable Area",        lv: "Izmantojamā platība" },
  modal_payback_lbl:{ en: "Payback Period",     lv: "Atmaksāšanās periods" },
  modal_profit_lbl: { en: "25-Year Profit",     lv: "25 gadu peļņa" },
  modal_savings_lbl:{ en: "Annual Savings",     lv: "Ikgadējie ietaupījumi" },
  modal_system_lbl: { en: "System Size",        lv: "Sistēmas jauda" },
  modal_prod_lbl:   { en: "Annual Production",  lv: "Ikgadējā ražošana" },
  modal_disclaimer: { en: "These are <strong>regional average estimates</strong> based on real Latvian solar irradiance data (PVGIS/EU JRC) and a typical 60 m² residential roof. Actual results depend on your specific roof size, orientation and shading. For 100% accurate figures, order our professional drone report.",
                      lv: "Šīs ir <strong>reģionālās vidējās aplēses</strong>, pamatojoties uz reāliem Latvijas saules starojuma datiem (PVGIS/ES PRC) un tipisku 60 m² dzīvojamo jumtu. Faktiskais rezultāts ir atkarīgs no jūsu konkrētā jumta izmēra, orientācijas un ēnojuma. Lai iegūtu 100% precīzus skaitļus, pasūti mūsu profesionālo drona pārskatu." },
  modal_drone_h:    { en: "Want 100% Accurate Results?", lv: "Vēlies 100% precīzus rezultātus?" },
  modal_drone_p:    { en: "Our certified drone operators will inspect your roof and deliver a professional PDF report within 24 hours — for just <strong style=\"color:#c45000;\">€149</strong>",
                      lv: "Mūsu sertificētie dronu operatori pārbaudīs tavu jumtu un piegādās profesionālu PDF pārskatu 24 stundu laikā — tikai par <strong style=\"color:#c45000;\">€149</strong>" },
  modal_drone_btn:  { en: "▶ Order Drone Report — €149", lv: "▶ Pasūtīt drona pārskatu — €149" },
  modal_close_btn:  { en: "Close — Analyze Another Address", lv: "Aizvērt — Analizēt citu adresi" },
  modal_partner_tag:{ en: "Certified Installation Partner", lv: "Sertificēts uzstādīšanas partneris" },
  modal_partner_pill:{ en: "FREE QUOTE", lv: "BEZMAKSAS PIEDĀVĀJUMS" },
  modal_partner_p:  { en: "Our certified installation partner will visit your property, physically confirm your results, and provide a <strong>no-obligation installation quote</strong> — completely free.",
                      lv: "Mūsu sertificētais uzstādīšanas partneris apmeklēs tavu īpašumu, fiziski apstiprinās tava rezultātus un sniegs <strong>uzstādīšanas piedāvājumu bez saistībām</strong> — pilnīgi bez maksas." },
  modal_partner_btn:{ en: "Get Free Installation Quote", lv: "Iegūt bezmaksas uzstādīšanas piedāvājumu" },

  /* ── DRONE ORDER FORM ──────────────────────────────── */
  drone_form_h:     { en: "Order Your Drone Report", lv: "Pasūti savu drona pārskatu" },
  drone_form_p:     { en: "Fill in your details and we will contact you within a few hours to confirm your appointment",
                      lv: "Aizpildi savus datus un mēs sazināsimies ar tevi dažu stundu laikā, lai apstiprinātu tikšanos" },
  drone_back:       { en: "Back to Results",    lv: "Atpakaļ uz rezultātiem" },
  drone_confirm:    { en: "Confirm Order — €149", lv: "Apstiprināt pasūtījumu — €149" },
  drone_no_charge:  { en: "You will not be charged now. We will contact you to confirm details and arrange payment.",
                      lv: "Jums tagad netiks izrakstīts rēķins. Mēs sazināsimies ar jums, lai apstiprinātu detaļas un vienotos par maksājumu." },

  /* ── PAYMENT ───────────────────────────────────────── */
  payment_title:    { en: "Accepted Payment Methods", lv: "Pieņemtās maksājumu metodes" },

  /* ── ABOUT PAGE ────────────────────────────────────── */
  about_tag:        { en: "About Sunlytics",    lv: "Par Sunlytics" },
  about_h1_pre:     { en: "Built to Make Solar", lv: "Izveidots, lai saules enerģiju" },
  about_h1_span:    { en: "Simple",             lv: "Vienkāršotu" },
  about_hero_p:     { en: "We believe every property owner in Latvia and the Baltic region deserves fast, honest, and affordable solar analysis — without the weeks of waiting.",
                      lv: "Mēs uzskatām, ka katram īpašuma īpašniekam Latvijā un Baltijas reģionā ir tiesības uz ātru, godīgu un pieejamu saules enerģijas analīzi — bez nedēļu gaidīšanas." },
  founder_tag:      { en: "Founder",            lv: "Dibinātājs" },
  founder_h2:       { en: "The Person Behind Sunlytics", lv: "Cilvēks aiz Sunlytics" },
  founder_title:    { en: "Founder & Developer", lv: "Dibinātājs un izstrādātājs" },
  founder_p1:       { en: "Sunlytics was founded by a self-taught developer with a background in healthcare — someone who understands both data-driven decision making and the importance of clear, reliable information.",
                      lv: "Sunlytics dibināja pašmācītais izstrādātājs ar pieredzi veselības aprūpē — cilvēks, kurš saprot gan uz datiem balstītu lēmumu pieņemšanu, gan skaidras un uzticamas informācijas nozīmi." },
  founder_p2:       { en: "After rebuilding a career through technology following personal hardship, the mission became clear: use modern tools to solve real problems for real people. Discovering that solar assessment in Latvia still required weeks of waiting and expensive engineer visits sparked the idea that became Sunlytics.",
                      lv: "Pēc karjeras atjaunošanas caur tehnoloģijām pēc personiskiem grūtumiem, misija kļuva skaidra: izmantot mūsdienīgus rīkus, lai risinātu reālas problēmas reāliem cilvēkiem. Atklājums, ka saules enerģijas novērtēšanai Latvijā joprojām nepieciešamas nedēļas gaidīšanas un dārgas inženieru vizītes, izraisīja ideju, kas kļuva par Sunlytics." },
  founder_p3:       { en: "Today, Sunlytics combines satellite imagery, AI analysis, and certified drone operators to deliver what used to take weeks — in seconds and 24 hours.",
                      lv: "Šodien Sunlytics apvieno satelīta attēlus, AI analīzi un sertificētus dronu operatorus, lai nodrošinātu to, kas agrāk aizņēma nedēļas — sekunžu un 24 stundu laikā." },
  badge_dev:        { en: "Self-taught Developer", lv: "Pašmācītais izstrādātājs" },
  badge_health:     { en: "Healthcare Background", lv: "Veselības aprūpes pieredze" },
  badge_solar:      { en: "Solar Tech Founder",    lv: "Saules tehnoloģiju dibinātājs" },
  story_tag:        { en: "Our Foundation",     lv: "Mūsu pamats" },
  story_title:      { en: "Story, Team &",      lv: "Stāsts, komanda un" },
  story_title2:     { en: "Mission",            lv: "Misija" },
  story_sub:        { en: "Everything that drives us forward every day", lv: "Viss, kas mūs virza uz priekšu katru dienu" },
  card1_h:          { en: "Our Story",          lv: "Mūsu stāsts" },
  card1_p:          { en: "Sunlytics was born from a simple frustration — discovering that solar assessment in Latvia still required weeks of waiting and expensive engineer visits, when technology could do it in seconds. After researching the Baltic solar market, we identified a clear gap and built the solution.",
                      lv: "Sunlytics radās no vienkāršas neapmierinātības — atklājot, ka saules enerģijas novērtēšanai Latvijā joprojām nepieciešamas nedēļas gaidīšanas un dārgas inženieru vizītes, kad tehnoloģija to varētu izdarīt sekundēs. Pētot Baltijas saules enerģijas tirgu, mēs identificējām skaidru nepilnību un izveidojām risinājumu." },
  card2_h:          { en: "Who Is Behind It",   lv: "Kas stāv aiz tā" },
  card2_p:          { en: "A self-taught developer with a background in healthcare who understands data-driven decision making and the importance of reliable information. After rebuilding a career through technology following personal hardship, the mission became clear: use modern tools to solve real problems for real people.",
                      lv: "Pašmācītais izstrādātājs ar pieredzi veselības aprūpē, kurš saprot uz datiem balstītu lēmumu pieņemšanu un uzticamas informācijas nozīmi. Pēc karjeras atjaunošanas caur tehnoloģijām pēc personiskiem grūtumiem, misija kļuva skaidra: izmantot mūsdienīgus rīkus, lai risinātu reālas problēmas reāliem cilvēkiem." },
  card3_h:          { en: "Our Mission",        lv: "Mūsu misija" },
  card3_p:          { en: "To make solar energy accessible and understandable for every property owner in Latvia and the Baltic region — by replacing slow, expensive assessments with instant satellite analysis and professional drone reports delivered in 24 hours.",
                      lv: "Padarīt saules enerģiju pieejamu un saprotamu katram īpašuma īpašniekam Latvijā un Baltijas reģionā — aizstājot lēnas, dārgas novērtēšanas ar tūlītēju satelīta analīzi un profesionāliem dronu pārskatiem, kas piegādāti 24 stundu laikā." },
  mission_h2_pre:   { en: "Ready to Discover Your Roof's", lv: "Gatavs uzzināt sava jumta" },
  mission_h2_span:  { en: "Solar Potential?",  lv: "Saules potenciālu?" },
  mission_p:        { en: "Join property owners across Latvia who are already saving thousands of euros with solar energy — starting with a free analysis in 60 seconds.",
                      lv: "Pievienojies māju īpašniekiem visā Latvijā, kuri jau ietaupa tūkstošus eiro ar saules enerģiju — sācot ar bezmaksas analīzi 60 sekundēs." },
  mission_btn:      { en: "Get Free Analysis",  lv: "Iegūt bezmaksas analīzi" },

  /* ── CONTACT PAGE ──────────────────────────────────── */
  contact_tag:      { en: "Contact Us",         lv: "Sazinies ar mums" },
  contact_h1_pre:   { en: "Get In",             lv: "Sazinies" },
  contact_h1_span:  { en: "Touch",              lv: "ar mums" },
  contact_hero_p:   { en: "Have questions about solar analysis or want to order a drone report? We are here to help.",
                      lv: "Vai ir jautājumi par saules analīzi vai vēlies pasūtīt drona pārskatu? Mēs esam šeit, lai palīdzētu." },
  contact_info_h2:  { en: "We Would Love to Hear From You", lv: "Mēs labprāt dzirdēsim no tevis" },
  contact_info_p:   { en: "Whether you have questions about your solar potential, want to order a drone report, or are a solar installer looking to partner with us — reach out and we will get back to you within a few hours.",
                      lv: "Neatkarīgi no tā, vai tev ir jautājumi par saules potenciālu, vēlies pasūtīt drona pārskatu vai esi saules uzstādītājs, kurš meklē sadarbību ar mums — sazinies un mēs atbildēsim dažu stundu laikā." },
  info_email_h:     { en: "Email Us",           lv: "Raksti mums" },
  info_based_h:     { en: "Based In",           lv: "Mēs atrodamies" },
  info_drone_h:     { en: "Drone Coverage",     lv: "Drona pārklājums" },
  info_drone_p:     { en: "Latvia & Baltic Region", lv: "Latvija un Baltijas reģions" },
  info_response_h:  { en: "Response Time",      lv: "Atbildes laiks" },
  info_response_p:  { en: "Within a few hours on business days", lv: "Dažu stundu laikā darba dienās" },
  form_h3:          { en: "Send Us a Message",  lv: "Nosūti mums ziņu" },
  form_p:           { en: "Fill in your details and we will get back to you shortly", lv: "Aizpildi savus datus un mēs drīz atbildēsim" },
  form_name_lbl:    { en: "Full Name",          lv: "Pilns vārds" },
  form_name_ph:     { en: "Your full name",     lv: "Tavs pilns vārds" },
  form_email_lbl:   { en: "Email Address",      lv: "E-pasta adrese" },
  form_email_ph:    { en: "your@email.com",     lv: "tavs@epasts.lv" },
  form_phone_lbl:   { en: "Phone Number",       lv: "Tālruņa numurs" },
  form_phone_ph:    { en: "+371 ...",           lv: "+371 ..." },
  form_subject_lbl: { en: "Subject",            lv: "Temats" },
  form_msg_lbl:     { en: "Message",            lv: "Ziņa" },
  form_msg_ph:      { en: "Tell us how we can help you...", lv: "Pastāsti, kā mēs varam tev palīdzēt..." },
  form_submit:      { en: "Send Message",       lv: "Nosūtīt ziņu" },

  /* ── PRIVACY PAGE ──────────────────────────────────── */
  privacy_h1:       { en: "Privacy Policy",     lv: "Privātuma politika" },
  privacy_updated:  { en: "Last updated: May 2026", lv: "Pēdējo reizi atjaunināts: 2026. gada maijā" },

  /* ── TERMS PAGE ────────────────────────────────────── */
  terms_h1:         { en: "Terms of Service",   lv: "Pakalpojuma noteikumi" },
  terms_updated:    { en: "Last updated: May 2026", lv: "Pēdējo reizi atjaunināts: 2026. gada maijā" },
};

/**
 * Apply translations to the current page.
 * @param {string} lang  "en" or "lv"
 */
function applyTranslations(lang) {
  // data-i18n → textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang] !== undefined) {
      el.textContent = TRANSLATIONS[key][lang];
    }
  });

  // data-i18n-html → innerHTML (for bold/span inside text)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang] !== undefined) {
      el.innerHTML = TRANSLATIONS[key][lang];
    }
  });

  // data-i18n-ph → placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang] !== undefined) {
      el.placeholder = TRANSLATIONS[key][lang];
    }
  });

  // Update <html lang=""> attribute
  document.documentElement.lang = lang;
}

/**
 * Switch language: update buttons, save preference, apply translations.
 */
function setLang(lang) {
  document.getElementById('langEN').classList.toggle('active', lang === 'en');
  document.getElementById('langLV').classList.toggle('active', lang === 'lv');
  localStorage.setItem('sunlytics-lang', lang);
  applyTranslations(lang);
}

/**
 * Restore saved language on page load — call this at end of body.
 */
function initLang() {
  const saved = localStorage.getItem('sunlytics-lang') || 'en';
  // Set button state without re-saving
  document.getElementById('langEN').classList.toggle('active', saved === 'en');
  document.getElementById('langLV').classList.toggle('active', saved === 'lv');
  applyTranslations(saved);
}
