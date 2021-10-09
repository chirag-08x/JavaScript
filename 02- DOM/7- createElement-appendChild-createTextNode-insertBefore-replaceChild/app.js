// createElement("element") = Create a HTML element dyanmically, ex. div, h1, p etc.
// createTextNode("text") = Creates text content for the newly created element.
// appendChild = Merges/append the text element to the newly created element. This thing will always append
// element at the end of the element.
// insertBefore("element", "location") = This method can also be used to append dynamically created element to
// another element, but instead of appending it to the end of the element, it will insert before a given element.
// replaceChild(newChild, oldChild) = replaces an element with the newly dynamically created element.

// creating an Element.
const bodyDiv = document.createElement("div");
// Creating text for that element.
const text = document.createTextNode("This is a div created dynamically");
// appending text element to the div.
bodyDiv.appendChild(text);
// appending newly created div to the body.
document.body.appendChild(bodyDiv);

//
const result = document.querySelector("#result");
console.log(result.children);
const heading = document.createElement("h2");
const headingText = document.createTextNode("Dynamically added heading");
heading.appendChild(headingText);
heading.classList.add("blue");
result.appendChild(heading);

// insertBefore
const newDiv = document.createElement("div");
const newDivText = document.createTextNode(
  "This is inserted using insert Before"
);
newDiv.appendChild(newDivText);
document.body.insertBefore(newDiv, result);

// replaceChild
const container = document.querySelector("#container");
const containerText = document.querySelector(".text");
const newPara = document.createElement("p");
const paraText = document.createTextNode(
  "Hello there the world is going to end soon, you have blood on your hands. This para has replaced the lorem para"
);
newPara.appendChild(paraText);

container.replaceChild(newPara, containerText);
