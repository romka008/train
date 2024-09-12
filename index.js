const hamburger_menu = document.getElementById("hamburger_menu");
const menu = document.getElementById("menu");
const about = document.getElementById("about_me");

hamburger_menu.addEventListener("click", function () {
    hamburger_menu.classList.toggle("open");
    menu.classList.toggle("open");
    about.classList.toggle("open");
});
