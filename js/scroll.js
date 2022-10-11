const aboutUsBtn = document.querySelector('[data-key="aboutUs"');
const pricesBtn = document.querySelector('[data-key="prices"');
const homeBtn = document.querySelector('[data-key="home"');
const contactBtn = document.querySelector('[data-key="contact"');

const scrollAboutUs = function () {
  var scrollElement = document.querySelector(".about-us").offsetTop;
  let navv = document.querySelector(".header__nav-container").offsetHeight;
  let calc = scrollElement - navv;
  window.scrollTo({ top: calc, behavior: "smooth" });
};

const scrollPrices = function () {
  var scrollElement = document.querySelector(".prices").offsetTop;
  let navv = document.querySelector(".header__nav-container").offsetHeight;
  let calc = scrollElement - navv;
  window.scrollTo({ top: calc, behavior: "smooth" });
};

const scrollHome = function () {
  // var scrollElement = document.querySelector(".Hi").offsetTop;
  // let navv = document.querySelector(".header__nav-container").offsetHeight;
  // let calc = scrollElement - navv;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollContact = function () {
  var scrollElement = document.querySelector(".contact").offsetTop;
  let navv = document.querySelector(".header__nav-container").offsetHeight;
  let calc = scrollElement - navv;
  window.scrollTo({ top: calc, behavior: "smooth" });
};

aboutUsBtn.addEventListener("click", scrollAboutUs);
pricesBtn.addEventListener("click", scrollPrices);
homeBtn.addEventListener("click", scrollHome);
contactBtn.addEventListener("click", scrollContact);

/// onscrollevents

const reveals = Array.from(document.querySelectorAll(".reveal"));

const reveal = () => {
  reveals.forEach((reveal) => {
    let windowHeight = window.innerHeight;
    let revealTop = reveal.getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("go");
    } else {
      reveal.classList.remove("go");
    }
  });
};

window.addEventListener("scroll", reveal);
