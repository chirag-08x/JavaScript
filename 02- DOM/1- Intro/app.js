// Steps to work with dom-
// 1 - Select the element which you want to interact with.
// 2 - Store it in a variable.
// 3 - Start applying properties to it.

// We also have acces to window object which contains the document object, which we will be interacting.
console.log(window);

// Whenever we select an element from the HTML using Js, we have access to a node list which is an Array like
// Object, which we can use to add various functionality to our page.
// Node list is an Array like Object and not an Array, so it does not have access to every array property.

// Window Object = Browser Api.

// Window is an object that contains all the DOM properties for example, alert, document, etc. We can also say
// windows.alert(), window.document(), etc. , but this thing is not necessary, since if JS cannot find the
// particular property name in it's normal flow, it will automatically look in the window object.

// This will return the HTML, since the HTML is wrapped inside the document object.
console.log(document);

// To view all window object document properties we do -
console.dir(document);
