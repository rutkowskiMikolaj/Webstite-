let darkModeStorage = localStorage.getItem("darkmode");

const header = document.querySelector(".header");
const home = document.querySelector(".home");
const aboutUs = document.querySelector(".about-us");
const prices = document.querySelector(".prices");
const contact = document.querySelector(".contact");
// const check = document.querySelector(".check");

const darkmodeButton = document.querySelector(".checkbox");

const onDarkMode = () => {
  header.classList.add("darkmode");
  home.classList.add("darkmode");
  aboutUs.classList.add("darkmode");
  prices.classList.add("darkmode");
  contact.classList.add("darkmode");
  // check.style.backgroundColor = "#fff";
  localStorage.setItem("darkmode", "on");
};

const offDarkMode = () => {
  header.classList.remove("darkmode");
  home.classList.remove("darkmode");
  aboutUs.classList.remove("darkmode");
  prices.classList.remove("darkmode");
  contact.classList.remove("darkmode");
  // check.style.backgroundColor = "#092c3e";
  localStorage.setItem("darkmode", "off");
};

if (darkModeStorage == "on") {
  onDarkMode();
}

darkmodeButton.addEventListener("click", () => {
  darkModeStorage = localStorage.getItem("darkmode");
  if (darkModeStorage !== "on") {
    onDarkMode();
  } else {
    offDarkMode();
  }
});
