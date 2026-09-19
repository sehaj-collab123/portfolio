// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================= CURRENT YEAR =================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ================= WHATSAPP CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // ==========================================
    // PUT YOUR WHATSAPP NUMBER HERE
    // ==========================================

    const whatsappNumber = "91XXXXXXXXXX";


    // Get form values

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    // Create WhatsApp message

    const whatsappMessage =
        "Hello Sehajpreet,%0A%0A" +
        "I visited your portfolio website.%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A" +
        "Message: " + encodeURIComponent(message);


    // WhatsApp URL

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage;


    // Open WhatsApp

    window.open(whatsappURL, "_blank");

});