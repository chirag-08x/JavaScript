import get from "../utils/getElement.js";
import getInfo from "../utils/fetchData.js";
import displayPeople from "../utils/displayUser.js";

const randomBtn = get(".random-btn");
const URL = "https://randomuser.me/api/";

window.addEventListener("DOMContentLoaded", async () => {
  const data = await fetch(URL);
  const response = await data.json();
  await displayPeople(response);
});

randomBtn.addEventListener("click", async () => {
  const data = await fetch(URL);
  const response = await data.json();
  await displayPeople(response);
});
