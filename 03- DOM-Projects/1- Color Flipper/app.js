const hexDigits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const butn = document.querySelector(".btn");
const span = document.querySelector("span");
const mainPage = document.querySelector(".main");

butn.addEventListener("click", function (e) {
  let currentColor = "#";
  for (let i = 0; i < 6; i++) {
    let currentValue = hexDigits[Math.floor(Math.random() * 16)];
    currentColor += currentValue;
  }
  span.textContent = currentColor;
  mainPage.style.backgroundColor = currentColor;
});
