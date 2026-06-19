'use strict';

// ===== LANGUAGE TRANSLATION SYSTEM =====

const translations = {
  en: {
    // Sidebar
    title: "PhD software engineer",
    showContacts: "Show Contacts",
    email: "Email",
    phone: "Phone",
    location: "Location",
    
    // Navbar
    about: "About",
    resume: "Resume",
    portfolio: "Portfolio",
    research: "Research",
    contact: "Contact",
    
    // About Section
    aboutTitle: "About me",
    underConstruction: "[[[UNDER CONSTRUCTION]]] [[[LOOKING FOR MY NEXT ROLE]]]",
    aboutIntro: "I'm a PhD and software developer with a passion for computer graphics, GPU programming, Data science and web development.",
    aboutPara2: "Recently, I completed my PhD in Computer Science at the XLIM laboratory under the supervision of Professor Benoit Crespin, where I focused on developing new algorithms and techniques for colloidal suspension simulations, with a particular emphasis on GPU programming and Delaunay triangulations. During my PhD, I gained extensive experience in C++, CUDA, and Python, as well as a deep understanding of computer graphics, high performance computing, computer geometry and numerical simulations.",
    
    whatImDoing: "What i'm doing",
    webDevelopment: "Web development",
    webDevDescription: "This webpage and others to come!",
    computerGraphics: "Computer graphics",
    graphicsDescription: "Development of 3D graphics applications, including games and simulations, using OpenGL.",
    research: "Research",
    researchDescription: "My research focuses on the development of new algorithms and techniques for simulation, with a particular emphasis on GPU programming and geometry.",
    dataScienceIA: "Data Science and IA",
    dataDescription: "Working on personal projects involving data analysis and machine learning, with a focus on using Python and popular libraries such as NumPy, Pandas, and Scikit-learn.",
    
    // Resume Section
    resumeTitle: "Resume",
    education: "Education",
    experience: "Experience",
    languages: "Languages",
    
    // Education items
    universityOfLimoges: "Université de Limoges",
    phdCompSci: "Ph.D. in Computer Science under the supervision of Prof. Benoit Crespin.",
    universityOfChile: "University of Chile",
    mscCompSci: "Msc. in Computer Science.",
    bachelorCompSci: "Bachelor in Computer Science.",
    
    // Experience items
    autoEntrepreneur: "Auto-entrepreneuriat",
    autoDesc: "Developed MD simulations and GPU-accelerated kernels for a university research project, enhancing performance, cross-platform compilation and scalability of simulations.",
    universityTeachingRes: "Université de Limoges - Teaching and Research Fellow",
    universityTeachingDesc: "Developed and optimized high-performance C++/CUDA primitives for simulations based on 3D Delaunay triangulations, improving simulation scalability of numerical experiments. Taught systems and programming courses, reinforcing expertise in low-level programming and parallel computing concepts.",
    adobeResearch: "Adobe Research - Research Intern (C++/Python/Geometric algorithms)",
    adobeDesc: "Benchmarked different decal generation algorithms for Lagrange, Adobe's in-house geometry processing library. Worked on performance-critical geometric algorithms with a focus on scalability, robustness, and maintainability. Collaborated with research engineers on advanced computational geometry pipelines.",
    geophysicsDept: "Geophysics Department, University of Chile - Software Eng./Part time dev. (Javascript)",
    geophysicsDesc: "Developed a web platform to visualize natural disasters. Designed and implemented a decision-support tool for earthquake response.",
    synopsys: "Synopsys Ltda. - R&D Intern (C++/Python)",
    synopsysDesc: "Improved debugging tools for performance-critical geometric algorithms used in industrial EDA software. Resolved Coverity issues and enhanced a GDB-based debugging workflow. Contributed to reliability and performance improvements in CATS software.",
    geomechanicsLab: "Geomechanics laboratory, AMTC - Research Intern (Python)",
    geomechanicsDesc: "Designed and implemented 3D mesh algorithms (mesh slicing variants) applied to sublevel stoping mining planning.",
    
    // Languages
    english: "🇬🇧 English",
    c1: "C1",
    french: "🇫🇷 French",
    b2: "B2",
    spanish: "🇪🇸 Spanish",
    native: "Native",
    fullCVFrench: "Full CV in French available",
    here: "here",
    
    // Portfolio Section
    portfolioTitle: "Portfolio",
    all: "All",
    webDev: "Web development",
    graphics3D: "3D Graphics",
    gpuProgramming: "GPU Programming",
    dataIA: "Data and IA",
    pachinkoTitle: "Pachinko tutorial",
    pachinkoCategory: "2D Graphics",
    pachinkoDesc: "A Godot engine tutorial demonstrating some basic game development concepts.",
    
    // Research Section
    researchTitle: "Research",
    rayTracing: "Ray Tracing, RT Cores, GPU Computing, Nearest Neighbors, Particle Simulation, Fixed Radius",
    paperTitle: "Meneses, E., Bec, H., Navarroa, C. A., Crespin, B., Quezada, F. A., Hitschfeld, N., Porro, H. & Maria, M. (2026). Advancing RT Core-Accelerated Fixed-Radius Nearest Neighbor Search. Future Generation Computer Systems, 108555.",
    paperDesc: "We propose three RT-core optimizations for GPU particle simulations: adaptive BVH update/rebuild scheduling, a neighbor-list-free FRNN variant, and support for periodic boundary conditions. Across Lennard-Jones simulations, these methods improve performance and energy efficiency (up to ~3.4× faster BVH handling) and scale well across GPU generations, while clarifying when traditional GPU approaches remain preferable.",
    
    // Contact Section
    contactTitle: "Contact",
  },
  fr: {
    // Sidebar
    title: "Ingénieur logiciel docteur",
    showContacts: "Coordonnées",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    
    // Navbar
    about: "À propos",
    resume: "CV",
    portfolio: "Portfolio",
    research: "Recherche",
    contact: "Coordonnées",
    
    // About Section
    aboutTitle: "À propos de moi",
    underConstruction: "[[[EN COURS DE CONSTRUCTION]]] [[[À LA RECHERCHE DE MON PROCHAIN POSTE]]]",
    aboutIntro: "Je suis un docteur en informatique et développeur passionné par les graphiques informatiques, la programmation GPU, la science des données et le développement web.",
    aboutPara2: "Récemment, j'ai terminé mon doctorat en informatique au laboratoire XLIM sous la supervision du professeur Benoit Crespin, où j'ai concentré mes efforts sur le développement de nouveaux algorithmes et techniques pour les simulations de suspensions colloïdales, en mettant l'accent particulier sur la programmation GPU et les triangulations de Delaunay. Au cours de mon doctorat, j'ai acquis une vaste expérience en C++, CUDA et Python, ainsi qu'une compréhension approfondie des graphiques informatiques, du calcul haute performance, de la géométrie informatique et des simulations numériques.",
    
    whatImDoing: "Ce que je fais",
    webDevelopment: "Développement web",
    webDevDescription: "Cette page et d'autres à venir!",
    computerGraphics: "Infographie",
    graphicsDescription: "Développement d'applications graphiques 3D, y compris des jeux et des simulations, utilisant OpenGL.",
    research: "Recherche",
    researchDescription: "Ma recherche se concentre sur le développement de nouveaux algorithmes et techniques de simulation, en mettant l'accent particulier sur la programmation GPU et la géométrie.",
    dataScienceIA: "Science des données et IA",
    dataDescription: "Travail sur des projets personnels impliquant l'analyse de données et l'apprentissage automatique, en mettant l'accent sur l'utilisation de Python et des bibliothèques populaires telles que NumPy, Pandas et Scikit-learn.",
    
    // Resume Section
    resumeTitle: "CV",
    education: "Éducation",
    experience: "Expérience",
    languages: "Langues",
    
    // Education items
    universityOfLimoges: "Université de Limoges",
    phdCompSci: "Doctorat en informatique sous la supervision du Prof. Benoit Crespin.",
    universityOfChile: "Université du Chili",
    mscCompSci: "Master en informatique.",
    bachelorCompSci: "Licence en informatique.",
    
    // Experience items
    autoEntrepreneur: "Auto-entrepreneur",
    autoDesc: "Développé des simulations MD et des noyaux accélérés par GPU pour un projet de recherche universitaire, améliorant la performance, la compilation multiplateforme et l'évolutivité des simulations.",
    universityTeachingRes: "Université de Limoges - Enseignant-chercheur",
    universityTeachingDesc: "Développé et optimisé des primitives C++/CUDA haute performance pour les simulations basées sur les triangulations 3D de Delaunay, améliorant l'évolutivité des simulations des expériences numériques. Enseigné les cours de systèmes et de programmation, renforçant l'expertise en programmation bas niveau et en concepts de calcul parallèle.",
    adobeResearch: "Adobe Research - Stagiaire en recherche (C++/Python/Algorithmes géométriques)",
    adobeDesc: "Évalué différents algorithmes de génération de décalques pour Lagrange, la bibliothèque de traitement de géométrie interne d'Adobe. Travaillé sur des algorithmes géométriques critiques en performance en mettant l'accent sur l'évolutivité, la robustesse et la maintenabilité. Collaboré avec des ingénieurs de recherche sur des pipelines avancés de géométrie computationnelle.",
    geophysicsDept: "Département de géophysique, Université du Chili - Ingénieur logiciel/Développeur à temps partiel (Javascript)",
    geophysicsDesc: "Développé une plateforme web pour visualiser les catastrophes naturelles. Conçu et mis en œuvre un outil d'aide à la décision pour la réaction aux tremblements de terre.",
    synopsys: "Synopsys Ltda. - Stagiaire R&D (C++/Python)",
    synopsysDesc: "Amélioré les outils de débogage pour les algorithmes géométriques critiques en performance utilisés dans les logiciels EDA industriels. Résolu les problèmes Coverity et amélioré un flux de débogage basé sur GDB. Contribué aux améliorations de la fiabilité et de la performance du logiciel CATS.",
    geomechanicsLab: "Laboratoire de géomécanique, AMTC - Stagiaire en recherche (Python)",
    geomechanicsDesc: "Conçu et implémenté des algorithmes de maillage 3D (variantes de tranche de maillage) appliqués à la planification minière de sous-niveau.",
    
    // Languages
    english: "🇬🇧 Anglais",
    c1: "C1",
    french: "🇫🇷 Français",
    b2: "B2",
    spanish: "🇪🇸 Espagnol",
    native: "Natif",
    fullCVFrench: "CV complet en français disponible",
    here: "ici",
    
    // Portfolio Section
    portfolioTitle: "Portfolio",
    all: "Tous",
    webDev: "Développement web",
    graphics3D: "Graphiques 3D",
    gpuProgramming: "Programmation GPU",
    dataIA: "Données et IA",
    pachinkoTitle: "Tutoriel Pachinko",
    pachinkoCategory: "Graphiques 2D",
    pachinkoDesc: "Un tutoriel du moteur Godot démontrant certains concepts de base du développement de jeux.",
    
    // Research Section
    researchTitle: "Recherche",
    rayTracing: "Traçage de rayons, noyaux RT, calcul GPU, voisins les plus proches, simulation de particules, rayon fixe",
    paperTitle: "Meneses, E., Bec, H., Navarroa, C. A., Crespin, B., Quezada, F. A., Hitschfeld, N., Porro, H. & Maria, M. (2026). Advancing RT Core-Accelerated Fixed-Radius Nearest Neighbor Search. Future Generation Computer Systems, 108555.",
    paperDesc: "Nous proposons trois optimisations de noyaux RT pour les simulations de particules GPU: planification adaptative de mise à jour/reconstruction BVH, une variante FRNN sans liste de voisins, et support pour les conditions aux limites périodiques. Dans les simulations Lennard-Jones, ces méthodes améliorent la performance et l'efficacité énergétique (jusqu'à ~3,4× plus rapide pour la gestion BVH) et se mettent à l'échelle bien sur les générations GPU.",
    
    // Contact Section
    contactTitle: "Contact",
  }
};

let currentLanguage = localStorage.getItem('language') || 'fr';

// Initialize language on page load
function initializeLanguage() {
  updatePageLanguage(currentLanguage);
  updateLanguageButton();
}

// Simpler text content mapping
const contentTranslations = {
  'PhD software engineer': {en: 'PhD software engineer', fr: 'Ingénieur logiciel docteur'},
  'Show Contacts': {en: 'Show Contacts', fr: 'Coordonnées'},
  'About me': {en: 'About me', fr: 'À propos de moi'},
  'What i\'m doing': {en: 'What i\'m doing', fr: 'Ce que je fais'},
};

// Update all text elements based on language
function updatePageLanguage(lang) {
  // Update elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update navbar buttons with data-en and data-fr attributes
  const navButtons = document.querySelectorAll('[data-nav-link]');
  navButtons.forEach(btn => {
    const key = lang === 'en' ? btn.getAttribute('data-en') : btn.getAttribute('data-fr');
    if (key) {
      btn.textContent = key;
    }
  });
  
  // Simple text replacement for key elements
  const title = document.querySelector('.title');
  if (title) {
    title.textContent = lang === 'en' ? 'PhD software engineer' : 'Ingénieur logiciel docteur';
  }
  
  const showContactsBtn = document.querySelector('.info_more-btn span');
  if (showContactsBtn) {
    showContactsBtn.textContent = lang === 'en' ? 'Show Contacts' : 'Contact';
  }
  
  // Update article titles
  const aboutTitle = document.querySelector('.about .article-title');
  if (aboutTitle) {
    aboutTitle.textContent = lang === 'en' ? 'About me' : 'À propos de moi';
  }
  
  const resumeTitle = document.querySelector('.resume .article-title');
  if (resumeTitle) {
    resumeTitle.textContent = lang === 'en' ? 'Resume' : 'CV';
  }
  
  const portfolioTitle = document.querySelector('.Research .article-title');
  if (portfolioTitle) {
    portfolioTitle.textContent = lang === 'en' ? 'Portfolio' : 'Portfolio';
  }
  
  const researchTitle = document.querySelector('.blog .article-title');
  if (researchTitle) {
    researchTitle.textContent = lang === 'en' ? 'Research' : 'Recherche';
  }
  
  const contactTitle = document.querySelector('.contact .article-title');
  if (contactTitle) {
    contactTitle.textContent = lang === 'en' ? 'Contact' : 'Contact';
  }
  
  // Update service titles
  const serviceTitle = document.querySelector('.service-title');
  if (serviceTitle) {
    serviceTitle.textContent = lang === 'en' ? 'What i\'m doing' : 'Ce que je fais';
  }
  
  // Update other titles
  const titleMappings = [
    { en: 'Education', fr: 'Éducation' },
    { en: 'Experience', fr: 'Expérience' },
    { en: 'Languages', fr: 'Langues' }
  ];
  
  titleMappings.forEach(mapping => {
    const targetText = lang === 'en' ? mapping.en : mapping.fr;
    // Search for both English and French and replace with target
    updateTitlesByText(mapping.en, targetText);
    updateTitlesByText(mapping.fr, targetText);
  });
  
  // Update education items - bidirectional
  const educationMappings = [
    { en: 'Université de Limoges', fr: 'Université de Limoges' }, // Same in both
    { en: 'Ph.D. in Computer Science under the supervision of Prof. Benoit Crespin.', fr: translations.fr.phdCompSci },
    { en: 'University of Chile', fr: 'Université du Chili' },
    { en: 'Msc. in Computer Science.', fr: 'Master en informatique.' },
    { en: 'Bachelor in Computer Science.', fr: 'Licence en informatique.' }
  ];
  
  educationMappings.forEach(mapping => {
    const targetText = lang === 'en' ? mapping.en : mapping.fr;
    const searchTexts = [mapping.en, mapping.fr].filter((text, index, arr) => text === arr[0] || text !== arr[0]);
    searchTexts.forEach(searchText => {
      updateTextBidirectional(searchText, targetText);
    });
  });
  
  // Update experience items - bidirectional
  const experienceMappings = [
    { en: 'Auto-entrepreneuriat', fr: 'Auto-entrepreneur' },
    { en: 'Developed MD simulations and GPU-accelerated kernels for a university research project, enhancing performance, cross-platform compilation and scalability of simulations.', fr: translations.fr.autoDesc },
    { en: 'Université de Limoges - Teaching and Research Fellow', fr: 'Université de Limoges - Enseignant-chercheur' },
    { en: 'Developed and optimized high-performance C++/CUDA primitives for simulations based on 3D Delaunay triangulations, improving simulation scalability of numerical experiments. Taught systems and programming courses, reinforcing expertise in low-level programming and parallel computing concepts.', fr: translations.fr.universityTeachingDesc },
    { en: 'Adobe Research - Research Intern (C++/Python/Geometric algorithms)', fr: 'Adobe Research - Stagiaire en recherche (C++/Python/Algorithmes géométriques)' },
    { en: 'Benchmarked different decal generation algorithms for Lagrange, Adobe\'s in-house geometry processing library. Worked on performance-critical geometric algorithms with a focus on scalability, robustness, and maintainability. Collaborated with research engineers on advanced computational geometry pipelines.', fr: translations.fr.adobeDesc },
    { en: 'Geophysics Department, University of Chile - Software Eng./Part time dev. (Javascript)', fr: 'Département de géophysique, Université du Chili - Ingénieur logiciel/Développeur à temps partiel (Javascript)' },
    { en: 'Developed a web platform to visualize natural disasters. Designed and implemented a decision-support tool for earthquake response.', fr: translations.fr.geophysicsDesc },
    { en: 'Synopsys Ltda. - R&D Intern (C++/Python)', fr: 'Synopsys Ltda. - Stagiaire R&D (C++/Python)' },
    { en: 'Improved debugging tools for performance-critical geometric algorithms used in industrial EDA software. Resolved Coverity issues and enhanced a GDB-based debugging workflow. Contributed to reliability and performance improvements in CATS software.', fr: translations.fr.synopsysDesc },
    { en: 'Geomechanics laboratory, AMTC - Research Intern (Python)', fr: 'Laboratoire de géomécanique, AMTC - Stagiaire en recherche (Python)' },
    { en: 'Designed and implemented 3D mesh algorithms (mesh slicing variants) applied to sublevel stoping mining planning.', fr: translations.fr.geomechanicsDesc }
  ];
  
  experienceMappings.forEach(mapping => {
    const targetText = lang === 'en' ? mapping.en : mapping.fr;
    // Try to replace either version, whichever exists on the page
    updateTextBidirectional(mapping.en, mapping.fr, targetText);
  });
  
  document.documentElement.lang = lang;
  localStorage.setItem('language', lang);
}

// Helper function to update text in h3 elements
function updateTitlesByText(englishText, targetText) {
  const h3Elements = document.querySelectorAll('h3');
  h3Elements.forEach(h3 => {
    if (h3.textContent.trim() === englishText) {
      h3.textContent = targetText;
    }
  });
}

// Helper function to find and update text throughout the page (bidirectional)
function updateTextBidirectional(searchText1, searchText2, targetText) {
  // Use targetText if provided, otherwise searchText2
  const target = targetText || searchText2;
  
  // Walk through all text nodes
  function walkAndReplace(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      // Search for either version of the text
      if (node.textContent.includes(searchText1)) {
        node.textContent = node.textContent.replace(searchText1, target);
      } else if (searchText2 && node.textContent.includes(searchText2)) {
        node.textContent = node.textContent.replace(searchText2, target);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Skip script and style tags
      if (node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
        let childIndex = 0;
        while (childIndex < node.childNodes.length) {
          walkAndReplace(node.childNodes[childIndex]);
          childIndex++;
        }
      }
    }
  }
  
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    walkAndReplace(mainContent);
  }
}

function updateLanguageButton() {
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    const langText = langBtn.querySelector('.lang-text');
    if (langText) {
      langText.textContent = currentLanguage === 'en' ? 'FR' : 'EN';
    }
  }
}

// Language toggle button
document.addEventListener('DOMContentLoaded', function() {
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function() {
      currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
      updatePageLanguage(currentLanguage);
      updateLanguageButton();
    });
  }
  initializeLanguage();
});

// ===== END LANGUAGE TRANSLATION SYSTEM =====



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const pageIndex = i; // Use the index to identify which page to activate

    for (let j = 0; j < navigationLinks.length; j++) {
      if (j === pageIndex) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}

// The language system is initialized via DOMContentLoaded event in the language section above