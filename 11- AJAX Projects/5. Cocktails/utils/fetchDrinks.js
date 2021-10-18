import displayDrinks from "./displayDrinks.js";

const fetchDrinks = async (url) => {
  try {
    const data = (await fetch(url)).json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
