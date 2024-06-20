import { NavPagination } from "../NavPagination/NavPagination.js";

export const navButtonContainer = document.querySelector(
  '[data-js="navigation"]'
);

export function NavButton() {
  const prevButton = document.createElement("button");
  prevButton.classList = "button button--prev";
  prevButton.setAttribute("data-js", "button-prev");
  prevButton.innerHTML = `previous`;

  const nextButton = document.createElement("button");
  nextButton.classList = "button button--next";
  nextButton.setAttribute("data-js", "button-next");
  nextButton.innerHTML = `next`;

  navButtonContainer.append(prevButton);
  NavPagination();
  navButtonContainer.append(nextButton);
}
