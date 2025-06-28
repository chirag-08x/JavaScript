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
// Splice method in js is used to change content of the array removing, replacing or adding elements at a specified position.
// array.splice(startIndex, deleteCount, item1, item2, ...., itemN)

// Remove elements from array
let fruits = ["apple", "banana", "mango", "orange"];
let removed = fruits.splice(1, 2);

console.log(fruits); // ["apple", "orange"]
console.log(removed); // ["banana", "mango"]

// Add elements to the array
const fruits2 = ["apple", "orange"];
fruits2.splice(1, 0, "banana", "mango");

console.log(fruits2); // ["apple", "banana", "mango", "orange"]

// Replace elements
let colors = ["red", "blue", "green"];
colors.splice(1, 1, "yellow");

console.log(colors); // ["red", "yellow", "green"]

// Remove all elements from certain index
let nums = [1, 2, 3, 4, 5];
let removedNums = nums.splice(2);

console.log(nums); // [1, 2]
console.log(removedNums); // [3, 4, 5]

// Using negative index
let letters = ["a", "b", "c", "d"];
letters.splice(-2, 1);

console.log(letters); // ["a", "b", "d"]
