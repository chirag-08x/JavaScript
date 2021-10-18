const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";

// fetch() is promised based. provided by the browser. If the XHR method is GET we can directly use fetch

btn.addEventListener("click", () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayData(data));
});

function displayJoke(url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
  return promise;
}

function displayData({ value: joke }) {
  img.classList.add("shake-img");
  content.innerText = joke;
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, random);
}
