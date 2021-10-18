const displaySingleDrink = (data) => {
  const list = [...data.querySelectorAll(".cocktail-link")];
  list.forEach((item) => {
    item.addEventListener("click", (e) => {
      const dataId = e.currentTarget.dataset.id;
      localStorage.setItem("value", dataId);
    });
  });
};

export default displaySingleDrink;
