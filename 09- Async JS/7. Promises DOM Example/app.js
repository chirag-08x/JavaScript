const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  changeColor(1000, one, "red")
    .then(() => changeColor(2000, two, "green"))
    .then(() => changeColor(1000, three, "blue"))
    .catch((err) => console.log(err));
});

// We can also return the empty resolve if it doesn't return anything, but it's mandatory to pass it even if it's empty. If one of the promise is rejected the (.then) after that line won't get executed, the loop breaks exactly there only.
function changeColor(time, element, color) {
  const promise = new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is problem in the selector ${element}`));
    }
  });
  return promise;
}
