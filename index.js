import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const searchBarInput = document.querySelector("#searchBarInput");

// States
const maxPage = 42;
let page = 1;
let searchQuery = "";
const url = "https://rickandmortyapi.com/api/character/?page=";

pagination.textContent = `${page} / ${maxPage}`;

async function fetchCharacters(page) {
  const response = await fetch(url + page);
  const character = await response.json();

  console.log(character);

  cardContainer.innerHTML = "";

  character.results.forEach((element) => {
    CharacterCard(element);
  });
}
fetchCharacters(1);

prevButton.addEventListener("click", () => {
  if (page === 1) {
    return;
  }
  fetchCharacters(page - 1);
  page--;
  pagination.textContent = `${page} / ${maxPage}`;
});

nextButton.addEventListener("click", () => {
  if (page === maxPage) {
    return;
  }
  fetchCharacters(page + 1);
  page++;
  pagination.textContent = `${page} / ${maxPage}`;
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = searchBarInput.value;
  const searchURL = url + `&name=${searchQuery}`;
  console.log(searchURL);
  fetchCharacters();
});
