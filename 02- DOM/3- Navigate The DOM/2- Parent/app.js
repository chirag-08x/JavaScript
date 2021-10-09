// Traverse The DOM to reach the Parent of an element.

const heading = document.querySelector("h2");
const headingParent = heading.parentElement;
const traverseParent = heading.parentElement.parentElement;
console.log(headingParent);
console.log(traverseParent);
