import get from "./getElement.js";

const section = get(".section-center");
const title = get(".not-found");

const displayDrinks = async ({ drinks }) => {
  if (!drinks) {
    title.innerText = "Sorry no drinks matched your search.";
    section.innerHTML = null;
    return;
  } else {
    const newDrinks = drinks
      .map((drink) => {
        const {
          idDrink: id,
          strDrink: drinkName,
          strDrinkThumb: image,
        } = drink;
        return `<a href="./drink.html" class="cocktail-link" data-id="${id}">
                    <article class="cocktail-container">
                        <img src="${image}" class="cocktail-img" alt="${drinkName}" />
                        <h3 class="cocktail-name">${drinkName}</h3>
                    </article>
                </a>`;
      })
      .join("");
    title.innerHTML = "";
    section.innerHTML = newDrinks;
    return section;
  }
};

export default displayDrinks;
