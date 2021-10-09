// To get the children of a selected Node we can use -
// childNodes = Returns all the childNodes, but it also includes the whitespace which is treated as a text node

// children = Returns only the actual children without the whitespaces counting as text nodes. Returns the Node List.

// firstChild = Returns the first Child of the Selected Element, but it will also include text-node, so first
// child will always be textNode.

// lastChild = Returns the last Child of the Selected Element, but it will also include text-node, so last
// child will always be textNode.

const result = document.querySelector("#result");
const allChild = result.childNodes;
console.log(allChild);

const children = result.children;
console.log(children);

const firstKid = result.firstChild;
console.log(firstKid);

const lastKid = result.lastChild;
console.log(lastKid);
