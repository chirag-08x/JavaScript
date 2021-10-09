const colors = ["rgba(133,122,200)", "#F15025", "green", "red"];
const button = document.querySelector(".btn");
const mainPage = document.querySelector(".main");
const span = document.querySelector("span");

button.addEventListener("click", function (e) {
  const colorVal = colors[Math.floor(Math.random() * 4)];
  span.textContent = colorVal;
  mainPage.style.backgroundColor = colorVal;
});
