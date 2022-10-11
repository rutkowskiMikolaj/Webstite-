let darkModeStorage = localStorage.getItem("darkmode");

const valuation = document.querySelector(".valuation");
const header = document.querySelector(".header");
const darkmodeButton = document.querySelector(".checkbox");

const onDarkMode = () => {
  header.classList.add("darkmode");
  valuation.classList.add("darkmode");
  localStorage.setItem("darkmode", "on");
};

const offDarkMode = () => {
  header.classList.remove("darkmode");
  valuation.classList.remove("darkmode");
  localStorage.setItem("darkmode", "off");
};

if (darkModeStorage == "on") {
  onDarkMode();
}

// if (darkModeStorage == "off") {
//   offDarkMode();
// }

const darkmode = () => {
  header.classList.toggle("darkmode");
  valuation.classList.toggle("darkmode");
};

darkmodeButton.addEventListener("click", () => {
  darkModeStorage = localStorage.getItem("darkmode");
  if (darkModeStorage !== "on") {
    onDarkMode();
  } else {
    offDarkMode();
  }
});
