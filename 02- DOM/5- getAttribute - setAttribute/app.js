// attributes = class, href, src, id, etc.
// getAttribute(attribute name) = get the attribute for the selected element.
// setAttribute(attribute name, value) = set the attribute for the selected element.

// getAttribute(specify the type of attribute you are searching for, ex. class, id, href, etc)

const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
const idValue = first.getAttribute("id");
console.log(classValue);
console.log(idValue);

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log(showLink);

const lastItem = link.nextElementSibling;
lastItem.setAttribute("class", "first");
lastItem.textContent = "I also have a class of first now";
console.log(lastItem);

const links = document.querySelectorAll(".first");
console.log(links);
