const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const url = "https://api.chucknorris.io/jokes/random";
btn.addEventListener("click", displayJoke);

function displayJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      img.classList.add("shake-img");
      const data = JSON.parse(xhr.responseText);
      const joke = data.value;
      content.innerText = joke;
      const random = Math.random() * 1000;
      setTimeout(() => {
        img.classList.remove("shake-img");
      }, random);
    }
  };
  xhr.send();
}
