/**
 * SR DEVELOPER - Official Website Experience Controller
 * Legacy Est. 1997 | Pune, India
 */

// Project Database for Interactive Modals
const projectDatabase = {
  emerald: {
    title: 'SR Emerald',
    subtitle: '2 & 3 Bed Ultra-Luxury Residences • Baner, West Pune',
    image: 'assets/images/emerald.jpg',
    status: 'New Launch Phase',
    bhk: '2 & 3 BHK',
    carpet: '840 - 1,320 Sq. Ft.',
    price: '₹ 1.15 Cr*',
    rera: 'P52100030110',
    overview: 'Perched in the prestigious Baner IT and lifestyle hub, SR Emerald combines cutting-edge German formwork structural engineering with sprawling high-floor balconies. Overlooking panoramic hillocks and the city skyline, it offers smart biometric home automation and private club amenities.',
    floorplans: {
      '2bhk': { label: '2 BHK Grand Suite • 840 Sq. Ft. Carpet Area', rooms: "Living (18'x13'), Master (14'x12'), Bedroom 2 (12'x11')" },
      '3bhk': { label: '3 BHK Royal Residence • 1,150 Sq. Ft. Carpet Area', rooms: "Living (21'x14'), Master (16'x13'), 2 Suites + Sundeck" },
      'penthouse': { label: 'Signature Duplex Penthouse • 1,980 Sq. Ft. Carpet Area', rooms: "Double-Height Lounge, 4 Master Suites, Sky Terrace" }
    }
  },
  esteban: {
    title: 'SR Esteban II',
    subtitle: '2 & 3 Bed Resort-Themed Residences • Undri, South Pune',
    image: 'assets/images/esteban.jpg',
    status: 'Under Construction',
    bhk: '2 & 3 BHK',
    carpet: '760 - 1,180 Sq. Ft.',
    price: '₹ 78 Lacs*',
    rera: 'P52100045890',
    overview: 'Located in the verdant, peaceful corridor of Undri in South Pune, SR Esteban II is designed around a lavish central lagoon pool and cabana retreat. Enjoy clean air, close proximity to renowned schools like Bishop’s and Sanskriti, and the Corinthians Club.',
    floorplans: {
      '2bhk': { label: '2 BHK Serene Comfort • 760 Sq. Ft. Carpet Area', rooms: "Living (17'x12'), Master (13'x11'), Guest Suite" },
      '3bhk': { label: '3 BHK Resort Horizon • 1,040 Sq. Ft. Carpet Area', rooms: "Living (20'x14'), 3 Bathrooms, Extended Veranda" },
      'penthouse': { label: 'Sky Villa Penthouse • 1,650 Sq. Ft. Carpet Area', rooms: "Private Jacuzzi Deck, 3 Ensuite Bedrooms" }
    }
  },
  equinox: {
    title: 'SR Equinox',
    subtitle: '2, 3 & 4 Bed Scenic Horizon Homes • Bavdhan, West Pune',
    image: 'assets/images/hero.jpg',
    status: 'Fast Possession',
    bhk: '2, 3 & 4 BHK',
    carpet: '890 - 1,840 Sq. Ft.',
    price: '₹ 95 Lacs*',
    rera: 'P52100031920',
    overview: 'Commanding a scenic vantage point in Bavdhan with seamless access to Kothrud and the Hinjawadi IT Park. Featuring high-grade vitrified tiles, soundproof glass acoustics, and an infinity rooftop lounge.',
    floorplans: {
      '2bhk': { label: '2 BHK Horizon Vista • 890 Sq. Ft. Carpet Area', rooms: "Living (18'x13'), Master (14'x12'), Kitchen Deck" },
      '3bhk': { label: '3 BHK Panorama • 1,280 Sq. Ft. Carpet Area', rooms: "Grand Foyer, 3 Luxury Suites, 2 Terraces" },
      'penthouse': { label: '4 BHK Imperial Penthouse • 1,840 Sq. Ft. Carpet Area', rooms: "Wraparound Balcony, Private Butler Pantry" }
    }
  },
  unitree: {
    title: 'SR Unitree',
    subtitle: 'Grade-A Corporate & IT Business Park • Yerwada, Central Pune',
    image: 'assets/images/unitree.jpg',
    status: 'Ready Possession',
    bhk: 'Grade-A Offices',
    carpet: '1,200 - 25,000 Sq. Ft.',
    price: 'Corporate Ready',
    rera: 'P52100000388',
    overview: 'A gleaming architectural marvel on Pune-Ahmednagar road, Yerwada. Housing multinational giants and the corporate headquarters of SR Developer. Features double-glazed curtain walls, LEED Gold compliance, 100% DG backup, and 3-level parking.',
    floorplans: {
      '2bhk': { label: 'Executive Boutique Suite • 1,200 Sq. Ft.', rooms: "Reception, 2 Boardrooms, 18 Workstations" },
      '3bhk': { label: 'Corporate Floor Wing • 6,500 Sq. Ft.', rooms: "Executive Cabins, Town Hall, Server Room" },
      'penthouse': { label: 'Full Floor IT/ITES Plate • 25,000 Sq. Ft.', rooms: "Custom Core & Shell with 360-degree glass views" }
    }
  },
  era: {
    title: 'SR Era',
    subtitle: '2 & 3 Bed Futuristic Residences • Dhanori, East Pune',
    image: 'assets/images/luxury-interior.jpg',
    status: 'Under Construction',
    bhk: '2 & 3 BHK',
    carpet: '710 - 1,020 Sq. Ft.',
    price: '₹ 68 Lacs*',
    rera: 'P52100046521',
    overview: 'Ideally located near Pune International Airport and the commercial business centers of Viman Nagar and Kalyani Nagar. Built with efficient zero-wastage layouts and smart family recreational gardens.',
    floorplans: {
      '2bhk': { label: '2 BHK Smart Layout • 710 Sq. Ft. Carpet Area', rooms: "Living (16'x12'), Master (13'x11'), Dining Area" },
      '3bhk': { label: '3 BHK Family Suite • 980 Sq. Ft. Carpet Area', rooms: "Living (19'x13'), 3 Bedrooms, Utility Balcony" },
      'penthouse': { label: 'Sky Lounge Suite • 1,420 Sq. Ft. Carpet Area', rooms: "Private Sundeck, Dual Master Suites" }
    }
  },
  enthral: {
    title: 'SR Enthral',
    subtitle: 'Next-Gen Corporate & Retail Suites • Kharadi IT Corridor',
    image: 'assets/images/unitree.jpg',
    status: 'New Launch',
    bhk: 'Commercial Hub',
    carpet: '650 - 8,000 Sq. Ft.',
    price: '₹ 1.20 Cr*',
    rera: 'P52100048120',
    overview: 'Positioned right at the gateway of Pune’s vibrant Kharadi EON IT corridor. High visibility retail frontages on the lower floors combined with grade-A corporate suites designed for startups and established enterprises.',
    floorplans: {
      '2bhk': { label: 'Prime High-Street Retail • 650 Sq. Ft.', rooms: "Double-Height Glass Frontage, High Footfall" },
      '3bhk': { label: 'Tech Accelerator Suite • 2,400 Sq. Ft.', rooms: "Open Plan Co-working Layout, Conference Hub" },
      'penthouse': { label: 'Penthouse Office Suite • 8,000 Sq. Ft.', rooms: "Private Executive Terrace, Direct Elevator" }
    }
  }
};

let currentModalProjectKey = 'emerald';
let heroCurrentIndex = 0;
let heroSliderTimer = null;
let introStep1Timer = null;
let introSlideUpTimer = null;

document.addEventListener('DOMContentLoaded', () => {
  initIntroAnimation();
  initHeroSlider();
  initStickyHeader();
  initMegaMenu();
  initProjectsFilter();
  initGalleryFilter();
  initMilestoneCounters();
  initNavScroll();
  initScrollProgress();
});

// ==========================================================================
// CINEMATIC INTRO ANIMATION ON REFRESH & NAVIGATION
// ==========================================================================
function initIntroAnimation() {
  const curtain = document.getElementById('introCurtain');
  const step1 = document.getElementById('introStep1');
  const step2 = document.getElementById('introStep2');
  if (!curtain || !step1) return;

  document.body.style.overflow = 'hidden';

  // Check if navigating back to Home via "?from=subpage"
  const urlParams = new URLSearchParams(window.location.search);
  const isBackToHome = urlParams.get('from') === 'subpage';
  const customPageTitle = curtain.getAttribute('data-intro-title');
  const customPageSubtitle = curtain.getAttribute('data-intro-subtitle');

  if (isBackToHome) {
    // Show 2-second "BACK TO HOME PAGE" transition animation
    step1.innerHTML = `<h1 class="intro-huge-title" style="letter-spacing: 0.16em;">BACK TO HOME PAGE</h1>`;
    step1.classList.add('active');
    if (step2) step2.style.display = 'none';

    setTimeout(() => {
      dismissIntroCurtain();
    }, 2000);
    return;
  }

  if (customPageTitle) {
    // Subpage 2-second intro text animation
    let titleHtml = `<h1 class="intro-huge-title" style="letter-spacing: 0.16em;">${customPageTitle}</h1>`;
    if (customPageSubtitle) {
      titleHtml += `<h2 class="intro-subtitle-title" style="font-size: 1.5rem; margin-top: 1rem; letter-spacing: 0.2em;">${customPageSubtitle}</h2>`;
    }
    step1.innerHTML = titleHtml;
    step1.classList.add('active');
    if (step2) step2.style.display = 'none';

    // Slide up curtain upwards after 2 seconds
    setTimeout(() => {
      dismissIntroCurtain();
    }, 2000);
    return;
  }

  // 1. Immediately show Step 1: SR DEVELOPER for full 2 seconds
  setTimeout(() => {
    step1.classList.add('active');
  }, 60);

  // 2. Smooth cross-fade to Step 2: BUILDERS AND DEVELOPERS after 2 seconds
  introStep1Timer = setTimeout(() => {
    step1.classList.remove('active');
    step1.classList.add('exit');
    if (step2) step2.classList.add('active');
  }, 2000);

  // 3. Slide up curtain upwards after 2 seconds of Step 2 (4000ms total)
  introSlideUpTimer = setTimeout(() => {
    dismissIntroCurtain();
  }, 4000);
}

function dismissIntroCurtain() {
  const curtain = document.getElementById('introCurtain');
  if (curtain) {
    curtain.classList.add('slide-up');
    document.body.style.overflow = '';
    if (typeof startHeroSliderTimer === 'function') {
      startHeroSliderTimer();
    }

    setTimeout(() => {
      curtain.classList.add('hidden');
    }, 1000);
  }
}

// ==========================================================================
// HERO BANNER SHOWCASE SLIDER
// ==========================================================================
function initHeroSlider() {
  updateHeroSlide(0);
}

function updateHeroSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const captionTag = document.getElementById('heroCaptionTag');
  const captionTitle = document.getElementById('heroCaptionTitle');

  if (!slides || slides.length === 0) return;

  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  heroCurrentIndex = index;

  slides.forEach((slide, i) => {
    if (i === heroCurrentIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  const activeSlide = slides[heroCurrentIndex];
  if (activeSlide) {
    const tag = activeSlide.getAttribute('data-tag');
    const title = activeSlide.getAttribute('data-title');
    if (captionTag && tag) captionTag.textContent = tag;
    if (captionTitle && title) captionTitle.textContent = title;
  }
}

function nextHeroSlide() {
  updateHeroSlide(heroCurrentIndex + 1);
  restartHeroSliderTimer();
}

function prevHeroSlide() {
  updateHeroSlide(heroCurrentIndex - 1);
  restartHeroSliderTimer();
}

function startHeroSliderTimer() {
  if (heroSliderTimer) clearInterval(heroSliderTimer);
  heroSliderTimer = setInterval(() => {
    nextHeroSlide();
  }, 5000); // 5s auto slide
}

function restartHeroSliderTimer() {
  if (heroSliderTimer) clearInterval(heroSliderTimer);
  startHeroSliderTimer();
}

// Sticky Header State Controller (Reveals ONLY when user scrolls down)
function initStickyHeader() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Ensure header is hidden immediately on load
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
}

// Fullscreen Mega Menu with Image Hover Switching (Signature SR Developer Interaction)
function initMegaMenu() {
  const toggleBtn = document.getElementById('menuToggleBtn');
  const overlay = document.getElementById('megaMenuOverlay');
  const menuItems = document.querySelectorAll('.mega-menu-item');
  const previewImg = document.getElementById('megaPreviewImg');
  const captionTitle = document.getElementById('megaCaptionTitle');
  const captionDesc = document.getElementById('megaCaptionDesc');

  if (toggleBtn && overlay) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = overlay.classList.contains('open');
      if (isOpen) {
        closeMegaMenu();
      } else {
        openMegaMenu();
      }
    });
  }

  // Hover switching for preview images
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const newSrc = item.getAttribute('data-preview');
      const title = item.getAttribute('data-caption-title');
      const desc = item.getAttribute('data-caption-desc');

      if (previewImg && newSrc) {
        previewImg.style.opacity = '0.3';
        setTimeout(() => {
          previewImg.src = newSrc;
          previewImg.style.opacity = '0.85';
        }, 150);
      }

      if (captionTitle && title) captionTitle.textContent = title;
      if (captionDesc && desc) captionDesc.textContent = desc;
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMegaMenu();
      closeProjectModal();
    }
  });
}

function openMegaMenu() {
  const overlay = document.getElementById('megaMenuOverlay');
  const toggleBtn = document.getElementById('menuToggleBtn');
  if (overlay) overlay.classList.add('open');
  if (toggleBtn) toggleBtn.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMegaMenu() {
  const overlay = document.getElementById('megaMenuOverlay');
  const toggleBtn = document.getElementById('menuToggleBtn');
  if (overlay) overlay.classList.remove('open');
  if (toggleBtn) toggleBtn.classList.remove('active');
  document.body.style.overflow = '';
}

window.openMegaMenu = openMegaMenu;
window.closeMegaMenu = closeMegaMenu;

// Filter Tabs for Featured Projects
function initProjectsFilter() {
  const tabs = document.querySelectorAll('.filter-tab-btn');
  const cards = document.querySelectorAll('.project-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');
      applyFilterToCards(filterVal);
    });
  });

  // Dropdown filter link handlers
  document.querySelectorAll('[data-filter-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      const filter = link.getAttribute('data-filter-link');
      filterProjectsByCategory(filter);
    });
  });
}

function applyFilterToCards(filterVal) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category') || '';
    if (filterVal === 'all' || cardCat.includes(filterVal)) {
      card.style.display = 'flex';
      card.style.opacity = '0';
      setTimeout(() => {
        card.style.opacity = '1';
      }, 50);
    } else {
      card.style.display = 'none';
    }
  });
}

function filterProjectsByCategory(cat) {
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(t => {
    if (t.getAttribute('data-filter') === cat) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });
  applyFilterToCards(cat);
  const projSec = document.getElementById('projects');
  if (projSec) {
    projSec.scrollIntoView({ behavior: 'smooth' });
  }
}

// Hero Search Matrix Handler
function executeFilterSearch() {
  const location = document.getElementById('filterLocation').value;
  const category = document.getElementById('filterCategory').value;
  const bhk = document.getElementById('filterBhk').value;

  const cards = document.querySelectorAll('.project-card');
  let matchCount = 0;

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category') || '';
    const cardLoc = card.getAttribute('data-location') || '';
    const cardBhk = card.getAttribute('data-bhk') || '';

    const matchLocation = (location === 'all' || cardLoc === location);
    const matchCategory = (category === 'all' || cardCat.includes(category));
    const matchBhk = (bhk === 'all' || cardBhk.includes(bhk));

    if (matchLocation && matchCategory && matchBhk) {
      card.style.display = 'flex';
      matchCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // Scroll smoothly to project section
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });

  // Update filter tabs visually to reflect custom search
  document.querySelectorAll('.filter-tab-btn').forEach(t => t.classList.remove('active'));

  showToast('Search Applied', `Found ${matchCount} matching project${matchCount === 1 ? '' : 's'} in Pune.`);
}

// Milestone Numbers Counting Animation
function initMilestoneCounters() {
  const counters = document.querySelectorAll('.milestone-number');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        if (!isNaN(target)) {
          animateCount(el, target);
        }
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCount(element, target) {
  let start = 0;
  const duration = 1600;
  const stepTime = 25;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target >= 1000 ? target.toLocaleString() + '+' : target + (target > 5 ? '+' : '');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + '+';
    }
  }, stepTime);
}

// Project Details Modal Controller
function openProjectModal(projectKey) {
  const data = projectDatabase[projectKey];
  if (!data) return;

  currentModalProjectKey = projectKey;

  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalSubtitle').textContent = data.subtitle;
  document.getElementById('modalHeroImg').src = data.image;
  document.getElementById('modalStatusBadge').textContent = data.status;
  document.getElementById('modalSpecBhk').textContent = data.bhk;
  document.getElementById('modalSpecCarpet').textContent = data.carpet;
  document.getElementById('modalSpecPrice').textContent = data.price;
  document.getElementById('modalSpecRera').textContent = data.rera;
  document.getElementById('modalOverviewText').textContent = data.overview;

  // Set default floor plan tab
  switchFloorplan('2bhk');

  // Bind site visit button
  const visitBtn = document.getElementById('modalVisitBtn');
  visitBtn.onclick = () => {
    closeProjectModal();
    openScheduleModal(data.title);
  };

  const backdrop = document.getElementById('projectModalBackdrop');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const backdrop = document.getElementById('projectModalBackdrop');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// Floorplan Switcher inside modal
function switchFloorplan(type) {
  const buttons = document.querySelectorAll('.fp-tab-btn');
  buttons.forEach(b => b.classList.remove('active'));

  const activeBtn = Array.from(buttons).find(b => b.textContent.toLowerCase().includes(type));
  if (activeBtn) activeBtn.classList.add('active');

  const data = projectDatabase[currentModalProjectKey];
  if (data && data.floorplans && data.floorplans[type]) {
    const plan = data.floorplans[type];
    document.getElementById('floorplanLabel').textContent = `${plan.label} • Key Highlights: ${plan.rooms}`;
  }
}

// Open Schedule Site Visit and pre-populate project if specified
function openScheduleModal(projectName) {
  const inquirySection = document.getElementById('inquiry');
  if (inquirySection) {
    inquirySection.scrollIntoView({ behavior: 'smooth' });
  }

  if (projectName) {
    const projectSelect = document.getElementById('leadProject');
    if (projectSelect) {
      for (let option of projectSelect.options) {
        if (option.value.includes(projectName) || projectName.includes(option.value)) {
          option.selected = true;
          break;
        }
      }
    }
  }

  // Highlight the form
  const formCard = document.querySelector('.contact-form-card') || document.querySelector('.inquiry-form-card');
  if (formCard) {
    formCard.style.outline = '2px solid var(--primary-blue)';
    setTimeout(() => {
      formCard.style.outline = 'none';
    }, 2000);
  }
}

// Simulated Brochure Download
function downloadBrochureSimulated() {
  showToast('Brochure Sent', 'The architectural brochure & floor plan dossier has been sent to your registered email.');
}

// Handle Form Submission with Validation
function handleInquirySubmit(event) {
  event.preventDefault();

  const name = document.getElementById('leadName').value.trim();
  const phone = document.getElementById('leadPhone').value.trim();
  const email = document.getElementById('leadEmail').value.trim();
  const project = document.getElementById('leadProject').value;
  const date = document.getElementById('leadDate').value || 'Tomorrow';
  const time = document.getElementById('leadTime').value;

  if (!name || !phone || !email || !project) {
    showToast('Incomplete Form', 'Please provide your name, phone number, and selected project.');
    return;
  }

  // Reset form
  document.getElementById('siteVisitForm').reset();

  // Show celebratory toast
  showToast(
    `Site Visit Confirmed!`,
    `Thank you, ${name}. Your consultation for ${project} on ${date} (${time}) is locked. Confirmation sent to ${phone}.`
  );
}

// Elegant Toast Alert
let toastTimer = null;
function showToast(title, message) {
  const toast = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastMsg = document.getElementById('toastMsg');

  if (!toast) return;

  toastTitle.textContent = title;
  toastMsg.textContent = message;

  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}

// Smooth Anchor Links navigation
function initNavScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Track Smooth Dynamic Scroll Progress
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

// Media Gallery Filter Handler (Photos, Videos, Drone Views)
function initGalleryFilter() {
  const tabs = document.querySelectorAll('[data-gallery-filter]');
  const items = document.querySelectorAll('.gallery-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-gallery-filter');
      items.forEach(item => {
        const itemType = item.getAttribute('data-type');
        if (filterVal === 'all' || itemType === filterVal) {
          item.style.display = 'block';
          item.style.opacity = '0';
          setTimeout(() => { item.style.opacity = '1'; }, 40);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}


