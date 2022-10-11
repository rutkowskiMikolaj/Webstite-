const langEL = document.querySelector(".header__language");
let languageStorage = localStorage.getItem("language");

var data = {
  PL: {
    home: "Strona Główna",
    aboutUs: "O nas",
    prices: "Cennik",
    contact: "Kontakt",
    valuation: "Darmowa wycena",
    aboutText1: "Uzyskaj profesionalną",
    aboutText2: "stronę",
    aboutText3:
      "Rozpocznij z nami współpracę i uzyskaj stronę internetową dostosowaną do Twoich potrzeb.",
    aboutText4: "Zaczynamy",
    desription: "Strony internetowe - Nasze projekty",
    desription1:
      "Nadal nie wiesz, czy potrzebujesz strony internetowej? Czy Twoja firma może funkcjonować bez klientów? Jak do tej pory je zdobyłeś? Czy zrobiłeś to z pomocą przedstawicieli handlowych, za które musiałeś słono zapłacić? A czy wiesz, że strony internetowe klientów z Gdańska potrafią to robić znacznie skuteczniej, a przede wszystkim taniej? Aby tak się stało, powinny być starannie zaprojektowane i wykonane zgodnie z wcześniej opracowaną strategią. Robimy to specjalnie dla Ciebie, wykorzystując nasze liczne umiejętności.",
    pattern1: "Sklepy internetowe",
    pattern2: "Strony Multi Page",
    pattern3: "Strony Single Page",
    pattern4: "Sklepy internetowe",
    pattern5: "Pozycjonowanie stron z gwarantowanym efektem.",
    pattern6: "Serwis techniczny",
    aboutText5: "Co nas charakteryzuje",
    aboutText6: "Taniość",
    aboutText7:
      "Najlepsze ceny na rynku, dopasowane do Twoich potrzeb. Nie znajdziesz taniej",
    aboutText8: "Szybkość",
    aboutText9:
      "Charakteryzuje nas szybkość tworzenia stron internetowych, strona będzie gotowa w ciągu tygodnia.",
    aboutText10: "Kontakt",
    aboutText11:
      "Doradztwo w zakresie pomysłu strony internetowej, serwisu. Jesteśmy zawsze gotowi do pomocy.",
    prices1: "Ceny stron internetowych",
    pricesAbout: "Zobacz przykładowe ceny naszych usług",
    pricesTitle1: "Wizytówka",
    pricesTitle2: "OnePage",
    pricesTitle3: "Skelp internetowy",
    pricesFrom: "Od",
    pricesTime1: "czas oczekiwania do 10 dni",
    pricesTime2: "czas oczekiwania do 7 dni",
    pricesTime3: "czas oczekiwania do 20 dni",
    pricesOption: "Rozbudowana strona z podstronami",
    pricesOption1: " - do 5 podstron",
    pricesOption2: " - umożliwienie publikacji aktualności/wpisów",
    pricesOption3: "Mapa Google",
    pricesOption4: " - ułatwi to klientom znalezienie Twojej firmy",
    pricesOption5: "Oryginalny Projekt",
    pricesOption6: " - dostosowany do twoich potrzeb",
    pricesOption7: "Responsywność",
    pricesOption8: " - przystosowanie do urządzeń mobilnych",
    pricesOption9: "Hosting i domena",
    pricesOption10: " - darmowa przez pierwsze 12 miesięcy",
    pricesOption11: " - strona z przewijanymi sekcjami",
    pricesOption12: "Formularz kontaktowy",
    pricesOption13: " - ułatwi łatwy kontakt przez stronę internetową",
    pricesOption14: "Dodawanie produktów",
    pricesOption15: " - w oparciu o intuicyjny system",
    pricesOption16: "Wyszukiwarka produktów",
    pricesOption17: " - ułatwieni poruszanie się po sklepie",
    pricesOption18: "Szybkie płatności",
    pricesOption19: " - niezbędne rozwiązanie dla wygody użytkowników",
    pricesOption20: "Koszyk",
    pricesOption21: " - intuicyjny i przyjazny suwak procesu zakupowego",
    prciesButton: "Zaczynajmy!",
    contactTitle: "Skontaktuj się z nami",
    contactQuestion1: "Masz pytania?",
    contactQuestion2: "Chcesz do nas przyjść?",
    contactQuestion3: "Chcesz porozmawiać?",
    contactText1: "Napisz!",
    contactText2: "Przyjedź!",
    contactText3: "Zadzwoń!",
  },
  EN: {
    home: "Home",
    aboutUs: "About Us",
    prices: "Prices",
    contact: "Contact",
    valuation: "Free Valuation",
    aboutText1: "Get a professional",
    aboutText2: "webstite",
    aboutText3:
      "Start working with us and get a website adjusted to your needs.",
    aboutText4: "Start",
    desription: "Websites - Our projects",
    desription1:
      "Still not sure if you need a website? Can your company function without customers? How have you acquired them so far? Did you do it with the help of sales representatives that you had to pay dearly? And did you know that the websites of customers from Gdańsk can do it much more effectively and, above all, cheaper? For this to be the case, they should be carefully designed and made according to a previously developed strategy. This is what we do especially for you, using our many skills.",
    pattern1: "Internet Shops",
    pattern2: "Multi Page Pages",
    pattern3: "Single Page Pages",
    pattern4: "Internet Shops",
    pattern5: "Positioning of websites with a guaranteed effect",
    pattern6: "Continuous technical servie",
    aboutText5: "What characterizes us",
    aboutText6: "Cheapness",
    aboutText7:
      "The best prices on the market, fitted to your needs. You won't find it cheaper",
    aboutText8: "Speed",
    aboutText9:
      "We are characterized by the speed of creating websites, it will be ready in the week.",
    aboutText10: "Contact",
    aboutText11:
      "Advice in idea of website, service. We are always ready to help you.",
    prices1: "Price list of websites",
    pricesAbout: "See sample prices of our services",
    pricesTitle1: "business card",
    pricesTitle2: "OnePage",
    pricesTitle3: "Online Shop",
    pricesFrom: "From",
    pricesTime1: "delivery time up to 10 days",
    pricesTime2: "delivery time up to 7 days",
    pricesTime3: "delivery time up to 20 days",
    pricesOption: "Extensive page with subpages",
    pricesOption1: " - up to 5 subpages",
    pricesOption2: " - enabling the publication of news / entries",
    pricesOption3: "Google map",
    pricesOption4:
      "  - it will make it easier for customers to find your company",
    pricesOption5: "Original project",
    pricesOption6: " - fitted to your needs",
    pricesOption7: "Responsiveness",
    pricesOption8: " - (adaptation to mobile devices)",
    pricesOption9: "Hosting and domain",
    pricesOption10: " - free for the first 12 months",
    pricesOption11: " - page with scrolling sections",
    pricesOption12: "Contact form",
    pricesOption13: " - enabling easy contact via the website",
    pricesOption14: "Adding products",
    pricesOption15: " - based on the intuitive system",
    pricesOption16: "Product finder",
    pricesOption17: " - making it easier to navigate through the store",
    pricesOption18: "Quick payments",
    pricesOption19: " -  a necessary solution for the convenience of users",
    pricesOption20: "Shopping cart",
    pricesOption21:
      " - an intuitive and friendly shopping process slider with products",
    prciesButton: "Lets go",
    contactTitle: "Contact with us",
    contactQuestion1: "Have Questions?",
    contactQuestion2: "Want see us?",
    contactQuestion3: "Want talk?",
    contactText1: "Write!",
    contactText2: "Come!",
    contactText3: "Call!",
  },
};

// function changeLanguage() {
//   if (langEL.textContent == "PL") {
//     document.querySelectorAll(`[data-key]`).forEach((element) => {
//       let key = element.getAttribute("data-key");
//       if (key) {
//         element.textContent = data.PL[key];
//       }
//     });
//     langEL.textContent = "EN";
//   } else {
//     document.querySelectorAll(`[data-key]`).forEach((element) => {
//       let key = element.getAttribute("data-key");
//       if (key) {
//         element.textContent = data.EN[key];
//       }
//     });
//     langEL.textContent = "PL";
//   }
// }

// langEL.addEventListener("click", changeLanguage);

const plLanguage = () => {
  document.querySelectorAll(`[data-key]`).forEach((element) => {
    let key = element.getAttribute("data-key");
    if (key) {
      element.textContent = data.PL[key];
    }
  });

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
