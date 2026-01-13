/* =========================
   HAMBURGER MENU TOGGLE
========================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

/* CLOSE MENU WHEN LINK CLICKED */
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (hamburger) hamburger.classList.remove("active");
    if (navMenu) navMenu.classList.remove("active");
  });
});

/* =========================
   SCROLL REVEAL ANIMATIONS
========================= */
const revealElements = document.querySelectorAll(".section, .card, .hero-section h1, .hero-section h2, .hero-section p");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

/* INITIAL REVEAL */
revealOnScroll();

/* =========================
   SMOOTH SCROLL FOR LINKS
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
