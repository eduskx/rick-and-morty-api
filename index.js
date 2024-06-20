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
let maxPage = 0;
let page = 1;
let searchQuery = "";
let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;

// fetch
/////////////////////////////////////////////
async function fetchCharacters(url) {
  const response = await fetch(url);
  const character = await response.json();
  maxPage = character.info.pages;
  pagination.textContent = `${page} / ${maxPage}`;

  console.log(character);

  cardContainer.innerHTML = "";

  character.results.forEach((element) => {
    CharacterCard(element);
  });
}
fetchCharacters(url);

// prev
/////////////////////////////////////////////
prevButton.addEventListener("click", () => {
  if (page === 1) {
    return;
  }
  page--;
  url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
  fetchCharacters(url);
  // pagination.textContent = `${page} / ${maxPage}`;
});

// next
/////////////////////////////////////////////
nextButton.addEventListener("click", () => {
  if (page === maxPage) {
    return;
  }
  page = page + 1;
  url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
  fetchCharacters(url);
  // pagination.textContent = `${page} / ${maxPage}`;
});

// searchbar
/////////////////////////////////////////////
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  page = 1;
  searchQuery = searchBarInput.value;
  url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;

  fetchCharacters(url);
});
