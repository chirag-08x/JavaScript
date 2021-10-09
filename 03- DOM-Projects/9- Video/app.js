const video = document.querySelector(".video");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  let change = e.currentTarget.classList;
  if (change.contains("move")) {
    video.play();
    change.remove("move");
  } else {
    video.pause();
    change.add("move");
  }
});

// preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
