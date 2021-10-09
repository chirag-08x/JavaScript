// previousSibling = returns the previous sibling or element before the selected element.
// nextSibling = returns the next sibling or element next to the selected element.
// Returns whitespace.

const first = document.querySelector(".first");
// This will return white space
const second = first.nextSibling;
console.log(second);
const realSecond = (first.nextSibling.nextSibling.style.color = "red");
console.log(realSecond);

const last = document.querySelector("#last");
const third = last.previousSibling.previousSibling;
console.log(third);

// returns null since this itself is a last element, it does not have any next Sibling.
const doesNotExist = last.nextSibling.nextSibling;
console.log(doesNotExist);
