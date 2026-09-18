/* ==========================================
   ANIMASI SAAT SCROLL
========================================== */

const animatedElements = document.querySelectorAll(
    ".about-card, .skill, .project-card, .timeline-item, .contact-info, .contact-form"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach((element) => {
    observer.observe(element);
});


/* ==========================================
   MENU MOBILE
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}


/* Tutup menu setelah klik menu */

document.querySelectorAll(".nav-menu a").forEach((link) => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});
