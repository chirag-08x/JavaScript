// Returns Array Object with a length property or an iterable object.
// Array From = Array From converts an Array-like/ish into the Array = string, nodeList, set

const chirag = "chirag";
console.log(Array.from(chirag));

function countTotal() {
  // arguments is an array like objects, contains all the function Arguments.
  console.log(arguments);
  let letTotal = Array.from(arguments).reduce((total, curr) => {
    return (total += curr);
  }, 0);
  console.log(letTotal);
}
countTotal(69, 54, 72);

// NodeList
const headings = document.querySelectorAll("h1");
console.log(headings);

// Can do Array operations on it now
const ArrayHeadings = Array.from(headings);
console.log(ArrayHeadings);
