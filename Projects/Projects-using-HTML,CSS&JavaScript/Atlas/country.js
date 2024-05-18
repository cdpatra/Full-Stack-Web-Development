// ! implementation of dark mode
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

   const borderCountries = document.querySelectorAll(`#border-countries-list a`);
   borderCountries.forEach((borderCountry) => borderCountry.classList.toggle(`light-dark`));

   const backButton = document.querySelector(`#back-button span`);
   backButton.classList.toggle(`light-dark`);
});
if (localStorage.getItem(`dark-mode`) === `true`) {
   localStorage.setItem(`dark-mode`, "false"); // making it false when we see true in local storage as when we simulate the click event, it toggles the true condition to false, therefore converting it into false so that it get true when it simulates the click event
   darkMode.click();
}

// ! fetching the information for the country through the params from URL
const countryOfficialName = new URLSearchParams(location.search).get(`name`);

// ! fetching the data of the particular required country
fetch(`https://restcountries.com/v3.1/name/${countryOfficialName}?fullText=true`)
   .then((res) => res.json())
   .then(([countryData]) => {
      // ! stoping the loading message
      document.querySelector(`.loading-message`).style.display = `none`;

      // ! setting the src of image of flag
      const flagImg = document.querySelector(`#country-flag`);
      flagImg.src = countryData.flags.svg;
      flagImg.alt = countryData.flags.alt;

      // !setting the country name
      const countryName = document.querySelector(`#country-name`);
      countryName.innerText = countryData.name.common;

      // ! setting the country information
      const countryInfo = document.querySelector(`#country-info`);

      // & getting the values of native names
      let nativeNames = `No Native Names`;
      if (countryData.name.nativeName) {
         const nativeNamesObjects = Object.values(countryData.name.nativeName);
         nativeNames = nativeNamesObjects.reduce((accumulator, { common }) => {
            accumulator.push(common);
            return accumulator;
         }, []);
      }

      // & getting population
      const population = countryData.population.toLocaleString(`en-IN`);

      // & getting region
      const region = countryData.region;

      // & getting sub region
      const subRegion = countryData.subregion;

      // & getting capitals
      const capitals = countryData.capital;
      countryInfo.innerHTML = `
         <p id="native"><strong>Native Names:</strong>&nbsp;&nbsp;${
            nativeNames === `No Native Names` ? `No Native Names` : nativeNames.join(`, `)
         }</p>
         <p id="population"><strong>Population:</strong>&nbsp;&nbsp;${population}</p>
         <p id="region"><strong>Region:</strong>&nbsp;&nbsp;${region}</p>
         <p id="sub-region"><strong>Sub Region:</strong>&nbsp;&nbsp;${subRegion ?? `No Sub Region`}</p>
         <p id="capital"><strong>Capital:</strong>&nbsp;&nbsp;${capitals ? capitals.join(`, `) : `No capital`}</p>`;

      // ! settings up the extra information
      const extraCountryInfo = document.querySelector(`#extra-info`);

      // & getting top level domain
      const domain = countryData.tld;

      // & getting currencies
      let currencies;
      if (countryData.currencies) {
         [currencies] = Object.values(countryData.currencies);
      }

      // & getting languages
      let languages;
      if (countryData.languages) {
         languages = Object.values(countryData.languages);
      }

      extraCountryInfo.innerHTML = `
         <p id="top-level-domain"><strong>Top Level Domain:</strong>&nbsp;&nbsp;&nbsp;${domain.join(`, `)}</p>
         <p id="currencies"><strong>Currencies:</strong>&nbsp;&nbsp;${currencies ? currencies.name : `No currencies`} ( Symbol: ${
         currencies ? currencies.symbol : `NA`
      } )</p>
         <p id="languages"><strong>Languages:</strong>&nbsp;&nbsp;${languages ? languages.join(`, `) : `No languages`}</p>`;

      // ! setting up the border countries
      const borderCountries = countryData.borders;
      const borderCountriesList = document.querySelector(`#border-countries-list`);
      const borderCountriesHeading = document.querySelector(`#border-info p strong`);
      borderCountriesHeading.innerText = `Border Countries:`;

      try {
         borderCountries.forEach((countryCode) => {
            (async function fetchingBorderCountries() {
               const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryCode}`);
               const [countryData] = await response.json();

               // ~ the below code will handle the dark and light mode of border countries after the fetching properly
               if (localStorage.getItem(`dark-mode`) === `true`) {
                  borderCountriesList.innerHTML += `
               <a class="light-dark" href="./country.html?name=${countryData.name.official}">${countryData.name.common}</a>`;
               } else {
                  borderCountriesList.innerHTML += `
               <a href="./country.html?name=${countryData.name.official}">${countryData.name.common}</a>`;
               }
            })();
         });
      } catch (err) {
         borderCountriesList.innerHTML = `No Border Countries`;
      }
      // ! setting up the country map link
      const mapHeading = document.querySelector(`#map-link strong`);
      mapHeading.innerText = `Map: `;
      const mapLink = document.querySelector(`#map-link a`);
      mapLink.href = `${countryData.maps.googleMaps}`;
      mapLink.innerText = `Click here to see this country on Google Map`;
   });

// ! implementing back button
const backButton = document.querySelector(`#back-button span`);
backButton.addEventListener(`click`, () => {
   history.back();
});
