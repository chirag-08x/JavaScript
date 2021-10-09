// remove = removes the full element.
// removeChild = removes the specific element from the node list.

const heading = document.querySelector("#result");
heading.remove();

const result = document.querySelector("#container");
const headings = result.querySelectorAll("h1");
// console.log(headings);
result.removeChild(headings[0]);
