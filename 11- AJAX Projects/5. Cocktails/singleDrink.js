import get from "./utils/getElement.js";
import setSingleDrink from "./utils/fetchSingleDrink.js";

const id = localStorage.getItem("value");
const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
const preLoader = get(".preloader");

window.addEventListener("DOMContentLoaded", async (e) => {
  const { drinks } = await fetchSingleDrink();
  setSingleDrink(drinks[0]);
});

window.addEventListener("load", () => {
  preLoader.classList.add("hide-loading");
});

async function fetchSingleDrink() {
  try {
    const data = (await fetch(URL)).json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
