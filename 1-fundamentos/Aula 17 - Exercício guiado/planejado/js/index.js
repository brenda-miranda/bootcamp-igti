/**
 * Estado da aplicação (state)
 */
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;
let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countCountries = document.querySelector('#countCountries');
  totalPopulationList = document.querySelector('#totalPopulationList');
  totalPopulationFvorites = document.querySelector('#totalPopulationFvorites');
  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();
});

function fetchCountries() {
  console.log('fetching...');
}