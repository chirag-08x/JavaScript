// Modules = Only works with live server.

// In named export the variable name should match from the file from which we are importing. If there are multiple things coming from the file we can add comma to accept them. The order in which they are being imported doesn't matter i.e. it can also be written as {testing, people}
import { people, testing } from "./namedExp.js";
console.log(testing);

// In Default export the names of the variable need not need to match we can name our variable whatever we want. In default export we can only have one export i.e. we can only export one variable.
import showInfo from "./defaultExp.js";

import get from "./getElement.js";

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn");

// If any of our selector is wrong JS will right away throw an Error.
const container = get(".container");
const btn = get(".btn");

btn.addEventListener("click", () => {
  container.innerHTML = showInfo(people);
});
