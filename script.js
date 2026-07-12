const button = document.getElementById("btn");
const contactBtn = document.getElementById("contactBtn");
const resumeBtn = document.getElementById("resumeBtn");
const themeBtn = document.getElementById("themeBtn");

// Let's Connect
button.addEventListener("click", function () {
    const name = prompt("Enter your name:");

    if (!name || name.trim() === "") {
        alert("Please enter your name 😀");
        return;
    }

     alert("Welcome " + name + "! 🚀\nThanks for visiting my portfolio!🤝");

    document.getElementById("welcomeMessage").textContent =
    "Welcome, " + name + "! 👋🏻 Thanks for visiting my portfolio.";

    button.textContent = "Let's Go! 🚀";
    button.style.backgroundColor = "#ff8c00";
});

// Contact Button
contactBtn.addEventListener("click", function () {
    alert("You can contact me at: yourxyz@email.com");
});

// Resume Button
resumeBtn.addEventListener("click", function () {
    alert("Resume will be available soon! 🚀");
});

// Theme Button
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

// Scroll Animation
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

// text effact
const text = "Aspiring Frontend Developer | Learning Every Day 🚀";
const typing = document.getElementById("typing");

let i = 0;

function typeEffect() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 70);
    }
}

typeEffect();
