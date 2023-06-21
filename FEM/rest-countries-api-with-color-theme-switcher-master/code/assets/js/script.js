// DOM elements
const countryListContainer = document.querySelector(
  ".countries-list-container"
);
const countryContainer = document.querySelector(".countries-list");
const searchInput = document.querySelector("#search-countries");
const regionSelect = document.querySelector("#countries-filter");

const detailPage = document.querySelector(".detail-page");
const detailCountryDetails = document.querySelector(".country-details");
const detailBorderCountries = document.querySelector(".border-countries");
const backButton = document.querySelector(".back-btn");

backButton.style.display = "none";

// Data storage
let countriesData = [];

// Fetch countries data from API
const fetchData = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    countriesData = await response.json();
    renderCountries(countriesData);
  } catch (error) {
    console.log("Error:", error);
  }
};

// Render countries in the UI
const renderCountries = (countries) => {
  countryContainer.innerHTML = "";

  countries.forEach((country) => {
    // Extract country data
    const { name, population, region, capital, flags } = country;
    const countryName = name.common;
    const countryPopulation = population;
    const countryRegion = region;
    const countryCapital = capital;
    const countryFlag = flags.svg;

    // Create country article element
    const countryArticle = document.createElement("article");
    countryArticle.innerHTML = `
      <div class="country-flag">
        <img src="${countryFlag}" alt="${countryName} Flag" />
      </div>
      <div class="country-info">
        <div class="country-name">
          <h1>${countryName}</h1>
        </div>
        <div class="country-details">
          <p>Population: ${countryPopulation}</p>
          <p>Region: ${countryRegion}</p>
          <p>Capital: ${countryCapital}</p>
        </div>
      </div>
    `;

    // Attach click event to view country details
    countryArticle.addEventListener("click", () => {
      showCountryDetails(country);
    });

    // Append country article to container
    countryContainer.appendChild(countryArticle);
  });
};

const showCountryDetails = (country) => {
  // Hide country list and show detail page
  countryListContainer.style.display = "none";
  backButton.style.display = "flex";
  detailPage.style.display = "flex";

  // Populate country details
  const { name, population, region, capital, subregion, flags, borders } =
    country;

  console.log(country);
  const countryName = name.common;

  const countryPopulation = population;
  const countryRegion = region;
  const countryCapital = capital;
  const countryFlag = flags.svg;

  detailCountryDetails.innerHTML = `
    <div class="country-flag">
      <img src="${countryFlag}" alt="${countryName} Flag" />
    </div>
    <div class="country-info">
      <h1>${countryName}</h1>
      <p>Population: ${countryPopulation}</p>
      <p>Region: ${countryRegion}</p>
      <p>Sub Region: ${subregion}</p>
      <p>Capital: ${countryCapital}</p>
    </div>
  `;

  const borderCountries = getBorderCountries(borders);
  renderBorderCountries(borderCountries);

  backButton.addEventListener("click", () => {
    countryListContainer.style.display = "flex";
    detailPage.style.display = "none";
  });
};

// GET BORDER COUNTRIES
const getBorderCountries = (borderCodes) => {
  return countriesData.filter((country) => borderCodes.includes(country.cca3));
};

// Render border countries
const renderBorderCountries = (borderCountries) => {
  const borderCountryNames = borderCountries.map(
    (country) => country.name.common
  );
  detailBorderCountries.innerHTML = `
    <h2>Border Countries:</h2>
    <div class="border-country-list">
      ${borderCountryNames.map((name) => `<button>${name}</button>`).join("")}
    </div>
  `;

  const borderButtons = detailBorderCountries.querySelectorAll("button");
  borderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const borderCountry = borderCountries.find(
        (country) => country.name.common === button.textContent
      );
      showCountryDetails(borderCountry);
    });
  });
};

// HANDLE SEARCH AND FILTER FUNCTIONALITY
const handleSearchAndFilter = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedRegion = regionSelect.value.toLowerCase();

  const filteredCountries = countriesData.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm);
    const matchesRegion =
      selectedRegion === "all" ||
      country.region.toLowerCase() === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  renderCountries(filteredCountries);
};

searchInput.addEventListener("input", handleSearchAndFilter);
regionSelect.addEventListener("change", handleSearchAndFilter);
// FETCH AND RENDER COUNTRIES DATA FROM THE REST API
fetchData();

//INDEPENDENT FUNCTIONS
// // Handle search input
// const handleSearch = () => {
//   const searchTerm = searchInput.value.toLowerCase();
//   const selectedRegion = regionSelect.value.toLowerCase();

//   // Filter countries based on search term and selected region
//   const filteredCountries = countriesData.filter((country) => {
//     const matchesSearch = country.name.common
//       .toLowerCase()
//       .includes(searchTerm);
//     const matchesRegion =
//       selectedRegion === "all" ||
//       country.region.toLowerCase() === selectedRegion;

//     return matchesSearch && matchesRegion;
//   });

//   // Render filtered countries
//   renderCountries(filteredCountries);
// };

// // Filter countries by region
// const filterByRegion = (event) => {
//   const selectedRegion = event.target.value.toLowerCase();

//   if (selectedRegion === "all") {
//     // Display all countries
//     renderCountries(countriesData);
//     return;
//   }

//   // Filter countries based on selected region
//   const filteredCountries = countriesData.filter(
//     (country) => country.region.toLowerCase() === selectedRegion
//   );

//   // Render filtered countries
//   renderCountries(filteredCountries);
// };

// // Event listeners for search and filter
// searchInput.addEventListener("input", handleSearch);
// regionSelect.addEventListener("change", filterByRegion);
