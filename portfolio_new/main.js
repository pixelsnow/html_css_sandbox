const header = document.querySelector("header");
const backButton = document.querySelector("#back_to_top");
const mobButton = document.querySelector("#mob_button");
const nav = document.querySelector(".main-menu");
const menuItems = document.querySelector(".menu-items");
const socials = document.querySelector(".socials");
let links = document.querySelectorAll("nav ul li a");

console.log("nav: ", nav);
console.log("menuItems: ", menuItems);
console.log("socials: ", socials);
console.log("links: ", links);

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
  console.log("mobMenu called");
  for (const link of links) {
    link.addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    /* socials.classList.remove("responsive"); */
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    /* socials.classList.add("responsive"); */
    document.body.style.overflow = "hidden";
  }
};

backButton.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
