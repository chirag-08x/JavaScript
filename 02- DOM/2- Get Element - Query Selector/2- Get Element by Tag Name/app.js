// ##############################################################################################################
// Get Element by Tag Name.
// It returns a node list array like object which holds all the passed tags in HTML.
const h2 = document.getElementsByTagName("h2");
console.log(h2);
h2[0].style.color = "skyBlue";
h2[0].style.fontSize = "2rem";

const listItems = document.getElementsByTagName("li");
console.log(listItems);

// forEach won't work on node list since it's not an Array, it's an Array like object
// listItems.forEach(function (item) {
//   console.log(item);
// });

for (let i = 0; i < listItems.length; i++) {
  //   console.log(listItems[i]);
  listItems[i].style.backgroundColor = "violet";
}
listItems[2].style.color = "red";
