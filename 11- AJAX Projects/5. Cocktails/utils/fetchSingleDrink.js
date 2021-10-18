import get from "./getElement.js";

const recipe = get(".single-description");
const cocktailName = get(".single-cocktail-name");
const list = get(".specs");
const image = get(".single-cocktail");

const setSingleDrink = (data) => {
  const {
    strDrink: drinkName,
    strInstructions: instructions,
    strDrinkThumb: img,
  } = data;
  let ingridients = [];
  for (let i = 1; i <= 15; i++) {
    const bBlate = `strIngredient${i}`;
    const ing = data[bBlate];
    if (ing) {
      ingridients.push(ing);
    } else {
      break;
    }
  }
  image.src = img;
  cocktailName.textContent = drinkName;
  recipe.textContent = instructions;
  console.log(ingridients);
  ingridients.forEach((item) => {
    list.innerHTML += `<li>
                          <i class="far fa-check-square"></i>
                          ${item}
                       </li>`;
  });
};

export default setSingleDrink;
