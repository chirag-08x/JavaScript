// In JavaScript, every object has a hidden internal property called [[Prototype]], which is either null or references another object. This internal link forms a prototype chain. It can be acccesed using __proto__

// When you try to access a property on an object:

// JavaScript first looks for the property on the object itself.

// If not found, it looks on the object's prototype.

// And then up the prototype chain until it finds it or reaches the end (null).

// __proto__ is the property itself, [[Prototype]] is what the key names comes when we logs that object in browser. More over we will be using __proto__ for all our functionality,

const p1 = {
  fname: "chirag",
  lname: "agrawal",
  fullName: function () {
    return `${this.fname} ${this.lname}`;
  },
};

// p1 object and it's properties are present on [[Prototype]] of p2, since we are using Object.create(p1)
// Initially if you console.log(p2), in that case it will be an empty object, but if you look inside it's [[Prototype]], it will be pointing to p1 object. When we search "fname" on p2, it will first search it, in the object itself, if it fails to do so, it will look that property up on the __proto__ object, which is eventually pointing to p1 object
const p2 = Object.create(p1);

// Below statement also does the same thing as above. Another way of writing the above statement.
/*** 
const p2 = {
    __proto__: p1,
};
*/

console.log(p1);
console.log(p2);

// This will basically overwrite the value of fname in p1
// p2.__proto__ points to p1 object
p2.__proto__.fname = "kartavya";

console.log(p1);
console.log(p2);
