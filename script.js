const button = document.getElementById("btn");

button.addEventListener("click",function () {
    const name = prompt("Enter your name:");

    if (name === "" || name === null){
        alert("Please enter your name 😀")
        return;
    }

    alert("Welcome " + name + "!🚀");
    button.textContent = "Let's Go! 🚀";
    button.style.backgroundColor = "red";
});

const contentBtn =
document.getElementById("contactBtn");

contactBtn.addEventListener("click", function (){
    alert("You can contact me at: yourxyz@email.com")
})

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

const resumeBtn = document.getElementById("resumeBtn");

resumeBtn.addEventListener("click",function (){
    alert("Resume will be available soon! 🚀");
})
