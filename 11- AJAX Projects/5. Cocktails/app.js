import get from "./utils/getElement.js";
import settleDrinks from "./utils/settleDrinks.js";
import "./utils/searchForm.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
const preLoader = get(".preloader");

window.addEventListener("DOMContentLoaded", async () => {
  const data = await settleDrinks(URL);
});

window.addEventListener("load", () => {
  preLoader.classList.add("hide-loading");
});

// Search - done
// RandomDrink - done
// Set id in storage - done
// Loading - done
// Single Drink - done
