// Get Element by ID.
/*
Get Element by ID does not return node list array like object coz ID's are unique so there will only be one
element by that name in HTML. So it just returns that element itself.
*/
const h1 = document.getElementById("title");
console.log(h1);
h1.style.color = "red";

const btn = document.getElementById("btn");
btn.style.backgroundColor = "#000";
btn.style.color = "white";
