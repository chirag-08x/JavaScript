import getJoke from "./utils/fetchData.js";
import get from "./utils/getElement.js";

const btn = get(".btn");
const content = get(".content");

btn.addEventListener("click", async () => {
  try {
    content.innerText = await getJoke();
  } catch (error) {
    console.log(error);
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  try {
    content.innerText = await getJoke();
  } catch (error) {
    console.log(error);
  }
});
