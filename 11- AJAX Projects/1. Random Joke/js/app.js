// Async Await
const btn = document.querySelector(".btn");
const URL = "https://api.chucknorris.io/jokes/random";
const content = document.querySelector(".content");
const image = document.querySelector("img");

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(URL);
    console.log(data);
    const response = await data.json();
    console.log(response);
    getJoke(response);
  } catch (error) {
    console.log(error);
  }
});

function displayJoke(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          state: xhr.readyState,
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
}

function getJoke({ value: joke }) {
  const random = Math.random() * 1000;
  image.classList.add("shake-img");
  setTimeout(() => {
    image.classList.remove("shake-img");
  }, random);
  content.innerText = joke;
}
