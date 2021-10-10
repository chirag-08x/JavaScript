// Photos won't be random due to change in rules, but functionality remains the same.

const btn = document.querySelector(".btn");
const container = document.querySelector(".img-container");
const url = "https://source.unsplash.com/random";

btn.addEventListener("click", () => {
  loadImage(url)
    .then((data) => container.appendChild(data))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  const promise = new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("failed to load image"));
    });
  });
  return promise;
}
