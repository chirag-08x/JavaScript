// event Bubbling = clicked elements gets triggered first then it goes all the way upto the parent.
// event capturing = fires the root/document element first and then moves down all the way upto the element clicked.
// event propogation =

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("current target", e.currentTarget);
  console.log("target", e.target);
}

list.addEventListener("click", showBubbling);
container.addEventListener("click", showBubbling);
document.addEventListener("click", showBubbling);
