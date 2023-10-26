window.onscroll = function() {
    if (window.pageYOffset > 0) {
        document.querySelector('.barra-fija').classList.add('barra-fija-activa');
    } else {
        document.querySelector('.barra-fija').classList.remove('barra-fija-activa');
    }
};

document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      body.setAttribute("data-theme", savedTheme);
      document.documentElement.style.setProperty("--theme", `var(--theme-${savedTheme})`);
    } else {
      body.setAttribute("data-theme", "dark");
    }

    themeToggle.addEventListener("click", function () {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.style.setProperty("--theme", `var(--theme-${newTheme})`);
    });
  });

const btn = document.querySelector(".toggle_btn");
const innerCircle = document.querySelector(".inner_circle");
const toogleBtn = document.querySelector(".toggle_btn");
const isMove = localStorage.getItem("isMove") === "true";
if (isMove) {
    innerCircle.classList.add("move");
}
    btn.addEventListener("click", ()=>{
    innerCircle.classList.toggle("move");
    if (innerCircle.classList.contains("move")) {
        localStorage.setItem("isMove", "true");
    } else {
        localStorage.setItem("isMove", "false");
    }
});