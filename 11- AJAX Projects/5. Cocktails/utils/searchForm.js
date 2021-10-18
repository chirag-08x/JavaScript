import get from "./getElement.js";
import settleDrinks from "./settleDrinks.js";

const form = get(".search-form");
const input = get(`[name="drink"]`);

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

form.addEventListener("keyup", (e) => {
  // e.preventDefault();
  const inputValue = input.value;
  if (!inputValue) {
    settleDrinks(`${baseURL}a`);
  } else {
    settleDrinks(`${baseURL}${inputValue}`);
  }
});
