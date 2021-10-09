// previousElementSibling = returns the previous sibling or element before the selected element.
// nextElementSibling = returns the next sibling or element next to the selected element.
// Does not returns whitespace.

const first = document.querySelector(".first");
const second = (first.nextElementSibling.style.color = "red");
console.log(second);

const last = document.querySelector("#last");
const third = last.previousElementSibling;
console.log(third);

const doesNotExist = last.nextElementSibling;
console.log(doesNotExist);
