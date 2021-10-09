// Array = [], 0 index based.

const friends = ["Sam", "John", "Lily", "James"];
console.log(friends);
console.log(friends[2]);
friends[3] = "Severus";
console.log(friends);

const mixed = ["hello", 27, undefined, null, ["chirag"]];
console.log(mixed);
console.log(mixed[4]);
console.log(mixed[7]);
let mix = mixed[4];
console.log(mix);

// Array methods and properties.
let names = ["Lily", "Severus", "James", "Harry", "Luna"];
let lastNames = ["Potter", "Snape", "Potter", "Potter", "Parker"];

// Length of the array
console.log(names.length);
// Accesing Items
console.log(names[0]);
console.log(names[2]);
console.log(names[names.length - 1]);
// Concat two arrays
const allNames = names.concat(lastNames);
console.log(allNames);
// Reverse the array
console.log(names.reverse());
// Add element to the beginning of the array
names.unshift("Draco");
console.log(names);
// Remove Element from the beginning of the array
names.shift();
console.log(names);
// Add element to the end of the array
names.push("Hermoine");
console.log(names);
// Remove from the end of the array
names.pop();
names.pop();
console.log(names);
// Removes elements from the array and mutates it
names.splice(2, 2); // Removes 2 elements starting from position 2 or index 1.
console.log(names);
