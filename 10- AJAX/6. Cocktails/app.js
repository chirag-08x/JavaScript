import showDrinks from "./utils/presentDrinks.js";
const URL = "www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

window.addEventListener("DOMContentLoaded", () => {
  showDrinks(URL);
});
