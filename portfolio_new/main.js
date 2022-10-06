const header = document.querySelector("header");
const backButton = document.querySelector("#back_to_top");
const mobButton = document.querySelector("#mob_button");
const nav = document.querySelector(".main-menu");
let links = document.querySelectorAll("nav ul li a");

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    /* header.classList.add("bg"); */
    backButton.style.display = "block";
  } else {
    /* header.classList.remove("bg"); */
    backButton.style.display = "none";
  }
};

window.onscroll = function () {
  scrollFunction();
};

const getToTop = () => {
  console.log("to top clicked");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (const link of links) {
    link.addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

backButton.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
