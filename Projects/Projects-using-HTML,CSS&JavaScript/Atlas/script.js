// ! implementation of the dark mode function
const darkMode = document.querySelector(`#mode`);

darkMode.addEventListener(`click`, () => {
   if ((localStorage.getItem(`dark-mode`) ?? "false") === "false") {
      localStorage.setItem(`dark-mode`, `true`);
      const modeIcon = document.querySelector(`.header-container .header #mode i`);
      modeIcon.classList.remove(`fa-moon`);
      modeIcon.classList.add(`fa-sun`);
      const modeName = document.querySelector(`.header-container .header #mode p span`);
      modeName.innerText = `Light Mode`;
   } else {
      localStorage.setItem(`dark-mode`, `false`);
      const modeIcon = document.querySelector(`.header-container .header #mode i`);
      modeIcon.classList.remove(`fa-sun`);
      modeIcon.classList.add(`fa-moon`);
      const modeName = document.querySelector(`.header-container .header #mode p span`);
      modeName.innerText = `Dark Mode`;
   }

   const container = document.querySelector(`.container`);
   container.classList.toggle(`dark`);

   const header = document.querySelector(`.header`);
   header.classList.toggle(`light-dark`);

   const headerContainer = document.querySelector(`.header-container`);
   headerContainer.classList.toggle(`light-dark`);

   const cardContainer = document.querySelector(`.card-container`);
   cardContainer.classList.toggle(`dark`);

   const search = document.querySelector(`#search-filter #search`);
   search.classList.toggle(`light-dark`);

   const filter = document.querySelector(`#search-filter #filter p`);
   filter.classList.toggle(`light-dark`);
   const filterMenus = document.querySelector(`#search-filter #filter .menus`);
   filterMenus.classList.toggle(`light-dark`);

   const allCards = document.querySelectorAll(`.card`);
   allCards.forEach((card) => {
      card.classList.toggle(`light-dark`);
   });
});
if (localStorage.getItem(`dark-mode`) === `true`) {
   localStorage.setItem(`dark-mode`, "false"); // making it false when we see true in local storage as when we simulate the click event, it toggles the true condition to false, therefore converting it into false so that it get true when it simulates the click event
   darkMode.click();
}
// ! fetching data using API and adding into the DOM
async function addCards() {
   const response = await fetch(`https://restcountries.com/v3.1/all`);
   const countriesData = await response.json();
   const cardContainer = document.querySelector(`.card-container`);
   // ! stoping the loading message
   document.querySelector(`.loading-message`).style.display = `none`;

   countriesData.forEach((countryData) => {
      console.log(typeof countryData.flags.alt);
      cardContainer.innerHTML += `
      <a class="card" href="./country.html?name=${countryData.name.official}">
      <img src="${countryData.flags.svg}" alt="${countryData.flags.alt ?? ""}" />
      <div class="information">
      <h3>${countryData.name.common}</h3>
      <p><strong>Population: </strong>${countryData.population.toLocaleString(`en-IN`)}</p>
      <p><strong>Region: </strong>${countryData.region}</p>
      <p><strong>Capital: </strong>${countryData.capital ?? "No Capital"}</p>
      </div>
      </a>`;
   });
   // ! setting dark mode after fetching and creating all the cards
   const allCards = document.querySelectorAll(`.card`);
   if (localStorage.getItem(`dark-mode`) === `true`) {
      allCards.forEach((card) => {
         card.classList.toggle(`light-dark`);
      });
   }
}
addCards();

// !implementation of search functionality
const searchInput = document.querySelector(`#search input`);
searchInput.addEventListener(`input`, (e) => {
   const countryName = e.target.value.toLowerCase().trim();
   const allCards = document.querySelectorAll(`.card`);
   allCards.forEach((card) => {
      const cardCountry = card.children[1].children[0].textContent.toLowerCase();
      if (cardCountry.includes(countryName)) {
         card.style.order = -1;
         card.style.visibility = `visible`;
      } else {
         card.style.order = 0;
         card.style.visibility = `hidden`;
      }
   });
});

// ! implementation of filter functionality
const filter = document.querySelector(`#filter p`);
const menus = document.querySelector(`.menus`);
filter.addEventListener(`click`, () => {
   menus.classList.toggle(`open`);
});
window.addEventListener(`click`, (e) => {
   if (e.target !== filter) {
      menus.classList.remove(`open`);
   }
   e.stopPropagation();
});
menus.addEventListener(`click`, (e) => {
   const allMenus = [...e.target.parentElement.children];
   allMenus.forEach((menu) => {
      menu.classList.remove(`filter-selected`);
   });
   if (e.target.innerText.toLowerCase() === `no filter`) {
      filter.classList.remove(`filter-selected`);
      const allCards = document.querySelectorAll(`.card`);
      allCards.forEach((card) => {
         card.style.display = `block`;
      });
      return;
   }
   filter.classList.add(`filter-selected`);
   e.target.classList.add(`filter-selected`);
   const allCards = document.querySelectorAll(`.card`);
   allCards.forEach((card) => {
      if (card.children[1].children[2].children[0].nextSibling.textContent.toLowerCase() === e.target.innerText.toLowerCase()) {
         card.style.display = `block`;
      } else {
         card.style.display = `none`;
      }
   });
});
