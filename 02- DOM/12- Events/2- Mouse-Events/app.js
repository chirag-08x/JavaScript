// click = fires after full action is completed.(Already Covered)
// mousedown = button is pressed.
// mouseup = button is released.
// mouseenter = hover on the element.
// mouseleave = hover away from the element

// When we Click on an element, the order in which listeners are activated ==> mousedown --> mouseup --> click

const heading = document.querySelector("h2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("action completed");
});

btn.addEventListener("mousedown", function () {
  console.log("down");
});

btn.addEventListener("mouseup", function () {
  console.log("up");
});

heading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});

heading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});
