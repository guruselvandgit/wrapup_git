// Mobile navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Bike details

function showBike(bikeName) {
    alert(
        "You selected " + bikeName +
        "\n\nThank you for your interest in RIZZA BIKES!"
    );
}


// Test ride form

const contactForm = document.getElementById("contactForm");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const bike = document.getElementById("bike").value;

    message.textContent =
        "Thank you, " + name +
        "! Your test ride request for " +
        bike + " has been received.";

    contactForm.reset();
});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
