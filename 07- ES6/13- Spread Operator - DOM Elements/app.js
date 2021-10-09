let heading = document.querySelectorAll("h1");
const result = document.querySelector("#result");

heading = [...heading];

const text = heading
  .map((item) => `<span>${item.textContent}</span>`)
  .join(" ");

result.innerHTML = text;
