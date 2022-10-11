function changeMenu() {
  var logoElement = document.querySelector(".header");
  var navElement = document.querySelector(".header__nav-container");
  let websiteWidth = window.innerWidth;
  if (window.scrollY >= 250 && websiteWidth >= 1024) {
    logoElement.style.transition = "0.4s";
    logoElement.classList.add("scroll");
    navElement.style.borderBottom = "0.1px solid rgb(231, 231, 231)";
  } else {
    logoElement.style.transition = "0.2s";
    navElement.style.borderBottom = "none";
    logoElement.classList.remove("scroll");
  }
}

const menuBtn = document.querySelector(".header__btn");
const burgerMenu = document.querySelector(".header__nav-container");

const burger = () => {
  menuBtn.classList.toggle("active");
  burgerMenu.classList.toggle("burger");
};

menuBtn.addEventListener("click", burger);

window.addEventListener("scroll", changeMenu);
