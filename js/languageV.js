const langEL = document.querySelector(".header__language");
let languageStorage = localStorage.getItem("language");

let data = {
  PL: {
    main: "Napisz do nas!",
    main2: "Zdobądz darmową wycenę,",
    main3: "lub odpowiedzi na swoje pytania",
    pages: "~ Ile stron?",
    onePage: "Jedna strona",
    twoPage: "1-4 strony",
    threePage: "5-10 stron",
    fourPage: "11+ stron",
    send: "Wyślij",
  },
  EN: {
    main: "Write to us!",
    main2: "Get a free valuation,",
    main3: "or some answers to your questions",
    pages: "~ How many pages?",
    onePage: "single page",
    twoPage: "1-4 pages",
    threePage: "5-10 pages",
    fourPage: "11+ pages",
    send: "Wyślij",
  },
};



const plLanguage = () => {
  document.querySelectorAll(`[data-key]`).forEach((element) => {
    let key = element.getAttribute("data-key");
    if (key) {
      element.textContent = data.PL[key];
    }
  });
  document.getElementsByName("name")[0].placeholder = "Twoje imię";
  document.getElementsByName("mail")[0].placeholder = "Twój mail";
  document.getElementsByName("number")[0].placeholder = "Twój numer telefonu";
  document.getElementsByName("text")[0].placeholder = "Tekst";
  localStorage.setItem("language", "pl");
  langEL.textContent = "EN";
};

const enLanguage = () => {
  document.querySelectorAll(`[data-key]`).forEach((element) => {
    let key = element.getAttribute("data-key");
    if (key) {
      element.textContent = data.EN[key];
    }
  });
  document.getElementsByName("name")[0].placeholder = "Your name";
  document.getElementsByName("mail")[0].placeholder = "Your E-mail";
  document.getElementsByName("number")[0].placeholder = "Your phone number";
  document.getElementsByName("text")[0].placeholder = "Text area";
  localStorage.setItem("language", "en");
  langEL.textContent = "PL";
};

if (languageStorage == "pl") {
  plLanguage();
}

langEL.addEventListener("click", () => {
  languageStorage = localStorage.getItem("language");
  if (languageStorage !== "pl") {
    plLanguage();
  } else {
    enLanguage();
  }
});
