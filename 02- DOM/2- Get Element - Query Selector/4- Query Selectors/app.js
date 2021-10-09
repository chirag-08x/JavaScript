// ############################################################################################################
// Query Selector and Query Selector All.
// We can pass any selector in Query Selectors, id, class, tags, attribute etc.
// Query Selector = Selects the first instance of the Selector passed.
/* Query Selector All = Selects all the instances of the Selector passed. We can also use forEach method on with 
                        Query Selector All. */

const single = document.querySelector("#result");
console.log(single);
single.style.backgroundColor = "red";

// This will only return first instance of item found with class special.
const item = document.querySelector(".special");
console.log(item);

// Selects all instances of of items with class of special.
const allItems = document.querySelectorAll(".special");
console.log(allItems);

// Selects the last Child of li.
const lastItem = document.querySelector("li:last-child");
console.log(lastItem);

const items = document.querySelectorAll(".special");
console.log(items);

items.forEach(function (element) {
  console.log(element);
  element.style.color = "cyan";
});
