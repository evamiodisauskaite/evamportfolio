function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(value);
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  return copied ? Promise.resolve() : Promise.reject(new Error("copy failed"));
}
const translations = {
  lt: {
    navAbout: "Apie", navVideo: "Video", navVisuals: "Vizualai", navLogo: "Logotipai", navExperience: "Patirtis", navContacts: "Kontaktai",
    heroEyebrow: "Multimedija · video montažas · grafinis dizainas",
    heroIntro: "Studijuoju multimediją ir kompiuterinį dizainą Vilniaus Gedimino technikos universitete. Portfolio pristatau filmų, video montažo, grafinių vizualų, logotipų ir maketavimo darbus.",
    heroVideo: "Video darbai", heroDesign: "Grafiniai darbai",
    aboutEyebrow: "Apie mane", aboutTitle: "Multimedijos ir kompiuterinio dizaino studentė",
    about1: "Domiuosi video kūrimu, montažu, grafiniu dizainu, vizualine komunikacija ir turinio paruošimu skirtingiems formatams.",
    about2: "Dirbu su „DaVinci Resolve“, „CapCut“, „Photoshop“, „Illustrator“, „InDesign“, „After Effects“ ir „Blender“.",
    about3: "Filmų projektuose išbandžiau operatorės, montuotojos ir garso režisierės roles. Ši patirtis padėjo geriau suprasti kadro, ritmo, garso ir montažo svarbą.",
    videoEyebrow: "Filmai ir video montažas", videoTitle: "Video darbai", videoNote: "Video paleidžiami pačioje svetainėje.",
    watchFilm: "Žiūrėti filmą", watchTrailer: "Žiūrėti trailerį", behind: "Behind the scenes", canvaPoster: "Canva plakatas",
    skillsEyebrow: "Įgūdžiai", skillsTitle: "Programos ir darbo sritys",
    skill1Title: "Video montažas", skill1Text: "Trumpų ir ilgesnių video montažas, ritmas, garso ir vaizdo suderinimas.",
    skill2Title: "Grafinis dizainas", skill2Text: "Posteriai, reklaminiai vizualai, produktų kompozicijos ir skaitmeniniai maketai.",
    skill3Title: "Logotipai ir identitetas", skill3Text: "Logotipo idėjos, spalvų kryptys, moodboard'ai ir vizualinio stiliaus paieška.",
    skill4Title: "Motion ir 3D", skill4Text: "Bazinė animacija, vizualiniai efektai ir 3D objektų kūrimo praktika.",
    visualsEyebrow: "Grafinis dizainas", visualsTitle: "Posteriai ir vizualai",
    card1Type: "Reklaminis posteris", card1Title: "Nescafe posteris", card1Text: "Produkto reklaminis vizualas, kuriame derinama kompozicija, spalva ir aiškus produkto akcentas.", canva: "Peržiūrėti Canva",
    card2Type: "Reklaminis posteris", card2Title: "Kvepalai", card2Text: "Produkto pristatymas, kuriame svarbi šviesa, kompozicija ir vizualinė nuotaika.",
    card3Type: "Portretinis posteris", card3Title: "Monika", card3Text: "Portretinis posteris apie dėstytoją, kuriame svarbi informacijos hierarchija ir vizualinis charakteris.",
    card4Type: "Produkto vizualas", card4Title: "Kava", card4Text: "Kavos prekės ženklo vizualinė kryptis: spalvos, pakuotės estetika ir produkto pateikimas.",
    card5Type: "Produkto turinys", card5Title: "Nescafe foto", card5Text: "Produkto nuotrauka, pritaikoma reklamos, posterio ar skaitmeninio maketo kūrimui.",
    card6Type: "Moodboard", card6Title: "Vizualinė kryptis", card6Text: "Nuotaikos, spalvų ir stiliaus paieška prieš kuriant galutinį dizaino sprendimą.",
    logoEyebrow: "Logotipai", logoTitle: "Logotipo ir identiteto darbai",
    logo1Type: "Universiteto logotipo idėja", logo1Title: "Ritmo", logo1Text: "Švari forma, judesio pojūtis ir lengvai atpažįstamas ženklas.",
    logo2Type: "Produkto identitetas", logo2Title: "Kava logo", logo2Text: "Minimalus logotipo sprendimas, tinkamas pakuotei ir produkto komunikacijai.",
    expEyebrow: "Darbo patirtis", expTitle: "Darbo patirtis",
    exp1Span: "2024.07 - 2025.10 · UAB OTCF Lithuania", exp1Title: "Klientų aptarnavimas ir parduotuvės priežiūra", exp1Text: "Dirbau 4F sporto drabužių parduotuvėje. Buvau atsakinga ne tik už profesionalų klientų aptarnavimą, bet ir už stilistės tipo pagalbą: padėjau klientams išsirinkti tinkamus drabužių derinius pagal jų poreikius, aktyvumą ir stilių. Taip pat dirbau su kasos aparatu, prekių priėmimu, pakavimu ir tvarkingu prekių išdėstymu parduotuvėje.",
    exp2Span: "2023.06 - 2023.09 · UAB Kulinarijos studija", exp2Title: "Pardavėja-asistentė", exp2Text: "Dirbau renginių asistente ir prisidėjau prie renginių organizavimo bei sklandžios jų eigos. Buvau atsakinga už pasiruošimą renginiui, pagalbą komandai ir darbą renginio metu. Taip pat dirbau su šefu Luca Demarco, padėjau virtuvėje, aptarnavau klientus, dirbau kasa, ruošiau kavą ir kruasanus.",
    contactEyebrow: "Kontaktai", contactTitle: "Susisiekime", contactText: "Esu atvira praktikos, kūrybinių projektų ar bendradarbiavimo pasiūlymams.", copied: "Numeris nukopijuotas", copyFail: "Nepavyko nukopijuoti",
    footer: "Eva Miodišauskaitė. Multimedijos portfolio."
  },
  en: {
    navAbout: "About", navVideo: "Video", navVisuals: "Visuals", navLogo: "Logos", navExperience: "Experience", navContacts: "Contact",
    heroEyebrow: "Multimedia · video editing · graphic design",
    heroIntro: "I study Multimedia and Computer Design at Vilnius Gediminas Technical University. This portfolio presents my film, video editing, graphic design, logo and layout work.",
    heroVideo: "Video work", heroDesign: "Graphic work",
    aboutEyebrow: "About me", aboutTitle: "Multimedia and Computer Design student",
    about1: "I am interested in video production, editing, graphic design, visual communication and preparing content for different formats.",
    about2: "I work with DaVinci Resolve, CapCut, Photoshop, Illustrator, InDesign, After Effects and Blender.",
    about3: "In film projects, I have worked as a camera operator, editor and sound director. This experience helped me understand the importance of framing, rhythm, sound and editing.",
    videoEyebrow: "Films and video editing", videoTitle: "Video work", videoNote: "Videos can be watched directly on this website.",
    watchFilm: "Watch film", watchTrailer: "Watch trailer", behind: "Behind the scenes", canvaPoster: "Canva poster",
    skillsEyebrow: "Skills", skillsTitle: "Software and areas of work",
    skill1Title: "Video editing", skill1Text: "Editing short and longer videos, rhythm, and balancing sound with visuals.",
    skill2Title: "Graphic design", skill2Text: "Posters, advertising visuals, product compositions and digital layouts.",
    skill3Title: "Logos and identity", skill3Text: "Logo concepts, color directions, moodboards and visual identity exploration.",
    skill4Title: "Motion and 3D", skill4Text: "Basic animation, visual effects and practice with 3D object creation.",
    visualsEyebrow: "Graphic design", visualsTitle: "Posters and visuals",
    card1Type: "Advertising poster", card1Title: "Nescafe poster", card1Text: "A product advertising visual combining composition, color and a clear product focus.", canva: "View Canva",
    card2Type: "Advertising poster", card2Title: "Perfume", card2Text: "A product presentation focused on light, composition and visual mood.",
    card3Type: "Portrait poster", card3Title: "Monika", card3Text: "A portrait poster about a lecturer, focused on information hierarchy and visual character.",
    card4Type: "Product visual", card4Title: "Coffee", card4Text: "A visual direction for a coffee brand: colors, packaging aesthetics and product presentation.",
    card5Type: "Product content", card5Title: "Nescafe photo", card5Text: "A product photo suitable for advertising, poster or digital layout design.",
    card6Type: "Moodboard", card6Title: "Visual direction", card6Text: "Exploration of mood, colors and style before creating the final design solution.",
    logoEyebrow: "Logos", logoTitle: "Logo and identity work",
    logo1Type: "University logo concept", logo1Title: "Ritmo", logo1Text: "A clean form, sense of movement and an easily recognizable mark.",
    logo2Type: "Product identity", logo2Title: "Coffee logo", logo2Text: "A minimal logo solution suitable for packaging and product communication.",
    expEyebrow: "Work experience", expTitle: "Work experience",
    exp1Span: "2024.07 - 2025.10 · UAB OTCF Lithuania", exp1Title: "Customer service and store presentation", exp1Text: "I worked in a 4F sportswear store. My responsibilities included professional customer service and stylist-like support: helping customers choose suitable outfit combinations based on their needs, activity and style. I also worked with the cash register, product receiving, packaging and neat product presentation in the store.",
    exp2Span: "2023.06 - 2023.09 · UAB Kulinarijos studija", exp2Title: "Sales assistant / event assistant", exp2Text: "I worked as an event assistant and contributed to event preparation and smooth execution. I was responsible for helping prepare events, supporting the team and assisting during the event. I also worked with chef Luca Demarco, helped in the kitchen, served customers, worked with the cash register and prepared coffee and croissants.",
    contactEyebrow: "Contact", contactTitle: "Let’s connect", contactText: "I am open to internship, creative project and collaboration opportunities.", copied: "Phone number copied", copyFail: "Could not copy",
    footer: "Eva Miodišauskaitė. Multimedia portfolio."
  }
};

const videoTexts = {
  "assets/videos/kur-baigiasi-horizontas-full.mp4": {
    lt: ["Trumpametražis filmas · operatorė", "Kur baigiasi horizontas", "Konkursinis filmas, dalyvavęs „Kino kovose“ ir rodytas kino teatre. Šiame projekte buvau operatorė."],
    en: ["Short film · camera operator", "Where the Horizon Ends", "A competition short film that participated in Kino kovos and was screened in a cinema. I worked as the camera operator on this project."]
  },
  "assets/videos/kur-baigiasi-horizontas-trailer.mp4": {
    lt: ["Traileris · montažas", "Kur baigiasi horizontas traileris", "Šį trailerį montavau, parinkdama ritmą, kadrų seką ir bendrą video nuotaiką."],
    en: ["Trailer · editing", "Where the Horizon Ends trailer", "I edited this trailer, shaping the rhythm, shot sequence and overall mood of the video."]
  },
  "assets/videos/behind-the-scenes-fixed.mp4": {
    lt: ["Behind the scenes · montažas", "Kūrybos procesas", "Montavau behind the scenes video, kuriame matomas filmavimo procesas, komandos darbas ir projekto užkulisiai."],
    en: ["Behind the scenes · editing", "Creative process", "I edited this behind-the-scenes video, showing the filming process, teamwork and production moments."]
  },
  "assets/videos/ir-tada-buvo-jis-full.mp4": {
    lt: ["Trumpametražis filmas · montažas", "Ir tada buvo jis", "Šį filmą montavau ir dirbau su garso režisūra. Daugiausia dėmesio skyriau montažo ritmui, nuotaikai ir sklandžiam emociniam pasakojimui."],
    en: ["Short film · editing", "And Then There Was Him", "I edited this film and worked on sound direction. I focused on editing rhythm, mood and a smooth emotional narrative."]
  },
  "assets/videos/ir-tada-buvo-jis-trailer.mp4": {
    lt: ["Traileris", "Ir tada buvo jis traileris", "Traileris pateikiamas kaip papildoma filmo peržiūros medžiaga."],
    en: ["Trailer", "And Then There Was Him trailer", "The trailer is included as additional viewing material for the film."]
  }
};

const selectors = {
  navAbout: '.nav a[href="#apie"]', navVideo: '.nav a[href="#video"]', navVisuals: '.nav a[href="#vizualai"]', navLogo: '.nav a[href="#logo"]', navExperience: '.nav a[href="#patirtis"]', navContacts: '.nav a[href="#kontaktai"]',
  heroEyebrow: '.hero .eyebrow', heroIntro: '.intro', heroVideo: '.hero-actions a:first-child', heroDesign: '.hero-actions a:last-child',
  aboutEyebrow: '#apie .eyebrow', aboutTitle: '#apie h2', about1: '#apie .about-grid p:nth-child(1)', about2: '#apie .about-grid p:nth-child(2)', about3: '#apie .about-grid p:nth-child(3)',
  videoEyebrow: '#video .eyebrow', videoTitle: '#video h2', videoNote: '#video .section-note',
  skillsEyebrow: '.skills .eyebrow', skillsTitle: '.skills h2',
  skill1Title: '.skill-grid article:nth-child(1) h3', skill1Text: '.skill-grid article:nth-child(1) p', skill2Title: '.skill-grid article:nth-child(2) h3', skill2Text: '.skill-grid article:nth-child(2) p', skill3Title: '.skill-grid article:nth-child(3) h3', skill3Text: '.skill-grid article:nth-child(3) p', skill4Title: '.skill-grid article:nth-child(4) h3', skill4Text: '.skill-grid article:nth-child(4) p',
  visualsEyebrow: '#vizualai .eyebrow', visualsTitle: '#vizualai h2',
  card1Type: '.project-grid .project-card:nth-child(1) .project-type', card1Title: '.project-grid .project-card:nth-child(1) h3', card1Text: '.project-grid .project-card:nth-child(1) p:not(.project-type)',
  card2Type: '.project-grid .project-card:nth-child(2) .project-type', card2Title: '.project-grid .project-card:nth-child(2) h3', card2Text: '.project-grid .project-card:nth-child(2) p:not(.project-type)',
  card3Type: '.project-grid .project-card:nth-child(3) .project-type', card3Title: '.project-grid .project-card:nth-child(3) h3', card3Text: '.project-grid .project-card:nth-child(3) p:not(.project-type)',
  card4Type: '.project-grid .project-card:nth-child(4) .project-type', card4Title: '.project-grid .project-card:nth-child(4) h3', card4Text: '.project-grid .project-card:nth-child(4) p:not(.project-type)',
  card5Type: '.project-grid .project-card:nth-child(5) .project-type', card5Title: '.project-grid .project-card:nth-child(5) h3', card5Text: '.project-grid .project-card:nth-child(5) p:not(.project-type)',
  card6Type: '.project-grid .project-card:nth-child(6) .project-type', card6Title: '.project-grid .project-card:nth-child(6) h3', card6Text: '.project-grid .project-card:nth-child(6) p:not(.project-type)',
  logoEyebrow: '#logo .eyebrow', logoTitle: '#logo h2', logo1Type: '.logo-card:nth-child(1) .project-type', logo1Title: '.logo-card:nth-child(1) h3', logo1Text: '.logo-card:nth-child(1) p:not(.project-type)', logo2Type: '.logo-card:nth-child(2) .project-type', logo2Title: '.logo-card:nth-child(2) h3', logo2Text: '.logo-card:nth-child(2) p:not(.project-type)',
  expEyebrow: '#patirtis .eyebrow', expTitle: '#patirtis h2', exp1Span: '.experience-list article:nth-child(1) span', exp1Title: '.experience-list article:nth-child(1) h3', exp1Text: '.experience-list article:nth-child(1) p', exp2Span: '.experience-list article:nth-child(2) span', exp2Title: '.experience-list article:nth-child(2) h3', exp2Text: '.experience-list article:nth-child(2) p',
  contactEyebrow: '#kontaktai .eyebrow', contactTitle: '#kontaktai h2', contactText: '.contact-box p'
};

let currentLang = localStorage.getItem('portfolio-lang') || 'lt';

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function updateActiveVideoTexts(lang) {
  document.querySelectorAll('.video-project').forEach((project) => {
    const active = project.querySelector('.video-switch.active');
    if (!active) return;
    const entry = videoTexts[active.dataset.src];
    if (!entry) return;
    const [type, title, description] = entry[lang];
    project.querySelector('.project-type').textContent = type;
    project.querySelector('h3').textContent = title;
    project.querySelector('.project-info > p:not(.project-type)').textContent = description;
  });
}

function applyLanguage(lang) {
  const t = translations[lang];
  Object.entries(selectors).forEach(([key, selector]) => setText(selector, t[key]));
  document.querySelectorAll('a[href*="canva.link"]').forEach((link) => {
    link.textContent = link.textContent.includes('plakatas') || link.textContent.includes('poster') ? t.canvaPoster : t.canva;
  });
  const videoButtons = document.querySelectorAll('.video-switch');
  if (videoButtons[0]) videoButtons[0].textContent = t.watchFilm;
  if (videoButtons[1]) videoButtons[1].textContent = t.watchTrailer;
  if (videoButtons[2]) videoButtons[2].textContent = t.behind;
  if (videoButtons[3]) videoButtons[3].textContent = t.watchFilm;
  if (videoButtons[4]) videoButtons[4].textContent = t.watchTrailer;
  const toggle = document.querySelector('.lang-toggle');
  if (toggle) toggle.textContent = lang === 'lt' ? 'EN' : 'LT';
  document.documentElement.lang = lang;
  document.querySelector('.footer p').innerHTML = `© <span id="year">${new Date().getFullYear()}</span> ${t.footer}`;
  updateActiveVideoTexts(lang);
  localStorage.setItem('portfolio-lang', lang);
  currentLang = lang;
}

document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('.lang-toggle')?.addEventListener('click', () => applyLanguage(currentLang === 'lt' ? 'en' : 'lt'));

document.querySelectorAll('.video-switch').forEach((button) => {
  button.addEventListener('click', () => {
    const video = document.getElementById(button.dataset.target);
    if (!video) return;
    const source = video.querySelector('source');
    source.src = button.dataset.src;
    source.type = button.dataset.type;
    video.poster = button.dataset.poster;
    video.load();
    button.closest('.switcher').querySelectorAll('.video-switch').forEach((item) => {
      item.classList.remove('active', 'primary');
      item.classList.add('secondary');
    });
    button.classList.add('active', 'primary');
    button.classList.remove('secondary');
    updateActiveVideoTexts(currentLang);
  });
});

document.querySelectorAll('.copy-phone').forEach((button) => {
  button.addEventListener('click', async () => {
    const status = button.parentElement.querySelector('.copy-status');
    try {
      await copyText(button.dataset.copy);
      if (status) {
        status.textContent = translations[currentLang].copied;
        window.setTimeout(() => { status.textContent = ''; }, 1800);
      }
    } catch (error) {
      if (status) status.textContent = translations[currentLang].copyFail;
    }
  });
});

applyLanguage(currentLang);
document.querySelectorAll(".copy-email").forEach((button) => {
  button.addEventListener("click", async () => {
    const status = button.parentElement.querySelector(".copy-status");
    try {
      await copyText(button.dataset.copy);
      if (status) {
        status.textContent = currentLang === "en" ? "Email copied" : "El. paštas nukopijuotas";
        window.setTimeout(() => { status.textContent = ""; }, 1800);
      }
    } catch (error) {
      if (status) status.textContent = currentLang === "en" ? "Could not copy" : "Nepavyko nukopijuoti";
    }
  });
});
document.querySelectorAll(".drive-switch").forEach((button) => {
  button.addEventListener("click", () => {
    const frame = document.getElementById(button.dataset.target);
    if (!frame) return;
    frame.src = button.dataset.src;

    button.closest(".drive-actions").querySelectorAll(".drive-switch").forEach((item) => {
      item.classList.remove("active", "primary");
      item.classList.add("secondary");
    });

    button.classList.add("active", "primary");
    button.classList.remove("secondary");
  });
});