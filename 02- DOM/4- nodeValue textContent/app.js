// Allows us to access the text content within the element.
// nodeValue
// textContent = Use this always

const item = document.getElementById("special");
const value = item.firstChild.nodeValue;
console.log(value);

const easyWay = item.textContent;
console.log(easyWay);
