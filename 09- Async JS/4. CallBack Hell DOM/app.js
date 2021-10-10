const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  changeColor();
});

function changeColor() {
  setTimeout(() => {
    one.style.color = "red";
    setTimeout(() => {
      two.style.color = "green";
      setTimeout(() => {
        three.style.color = "blue";
      }, 1000);
    }, 2000);
  }, 1000);
}
