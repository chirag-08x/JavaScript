import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import displaySingleDrink from "./displaySingleDrink.js";

const settleDrinks = async (url) => {
  try {
    const data = await fetchDrinks(url);
    const response = await displayDrinks(data);
    console.log(response);
    const singleDrink = displaySingleDrink(response);
  } catch (error) {
    console.log(error);
  }
};

export default settleDrinks;
