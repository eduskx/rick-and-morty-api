export function SearchBar() {
  const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]'
  );
  const searchInput = document.createElement("form");
  searchInput.classList.add("search-bar");
  searchInput.setAttribute("data-js", "search-bar");
  searchInput.innerHTML = `
            <input
            id="searchBarInput"
            name="query"
            class="search-bar__input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button>
        </form> 
        `;
  searchBarContainer.append(searchInput);
}
