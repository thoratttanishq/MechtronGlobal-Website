// ==================== SCRIPT.JS - MechtronGlobal BIM Services ====================

// Initialize AOS (scroll animations)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// ==================== PRELOADER ====================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;
  preloader.style.opacity = "0";
  setTimeout(() => preloader.remove(), 600);
});

// ==================== DYNAMIC YEAR ====================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ==================== PAGE TRANSITION ====================
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return; // skip anchors
    e.preventDefault();
    document.body.classList.add("page-transition");
    setTimeout(() => (window.location.href = href), 500);
  });
});

// ==================== COUNTER ANIMATION ====================
const counters = document.querySelectorAll(".counter");
const speed = 200;

const animateCounters = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const updateCount = () => {
      const count = +counter.innerText;
      const inc = Math.ceil(target / speed);
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Trigger counters only once when in view
const counterSection = document.querySelector(".counters");
if (counterSection) {
  let started = false;
  window.addEventListener("scroll", () => {
    const top = counterSection.getBoundingClientRect().top;
    if (top < window.innerHeight && !started) {
      animateCounters();
      started = true;
    }
  });
}

// ==================== TILT EFFECT (DISABLED ON MOBILE) ====================
const isTouchDevice = () => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

if (!isTouchDevice()) {
  const tiltCards = document.querySelectorAll(".tilt");
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / 20).toFixed(2);
      const rotateY = ((centerX - x) / 20).toFixed(2);

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
  });
}

// ==================== OPTIONAL PERFORMANCE IMPROVEMENTS ====================
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ==================== LIGHTBOX FUNCTIONALITY MEPF PAGE====================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");
const sampleItems = document.querySelectorAll(".sample-item img");

sampleItems.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.dataset.src;
  });
});

// Close on click X
lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close on click outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

