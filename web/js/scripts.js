// LOGO → scroll al inicio
document.getElementById("logoTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* GSAP ANIMACIONES */

// Fade-in del hero
gsap.from(".title", {
    opacity: 0,
    y: 50,
    duration: 1.2
});

gsap.from(".subtitle", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    delay: 0.2
});

gsap.from(".btn-primary", {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    delay: 0.4
});

// Animación scroll para "Nosotros"
gsap.from(".nosotros-text", {
    scrollTrigger: "#nosotros",
    opacity: 0,
    x: -80,
    duration: 1
});

gsap.from(".nosotros-img", {
    scrollTrigger: "#nosotros",
    opacity: 0,
    x: 80,
    duration: 1
});



// Animación MVV
gsap.from(".mvv-card", {
    scrollTrigger: "#disciplinas",
    opacity: 0,
    y: 60,
    duration: 0.9,
    stagger: 0.2
});


// Toggle menú móvil
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});




gsap.from(".hero-block", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    delay: 0.3,
    ease: "power2.out"
});

