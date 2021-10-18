import getJoke from "./utils/fetchData.js";
import get from "./utils/getElement.js";
import shakeImg from "./utils/shakeImg.js";

const btn = get(".btn");
const content = get(".content");
const image = get(".chuck-img");

btn.addEventListener("click", async () => {
  try {
    content.innerText = await getJoke();
    shakeImg(image);
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
