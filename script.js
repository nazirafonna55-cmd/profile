// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Menutup menu setelah memilih navigasi

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.");

    contactForm.reset();

});


// ================= SKILL ANIMATION =================

const progressBars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.transition = "width 1.5s ease";
        }

    });

}, {
    threshold: 0.5
});


progressBars.forEach(bar => {
    observer.observe(bar);
});
```
