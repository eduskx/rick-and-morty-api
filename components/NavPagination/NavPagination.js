import { navButtonContainer } from "../NavButton/NavButton.js";

export function NavPagination() {
  const navSpan = document.createElement("span");
  navSpan.classList.add("navigation__pagination");
  navSpan.setAttribute("data-js", "pagination");
  navSpan.textContent = ``;
  navButtonContainer.append(navSpan);
}
