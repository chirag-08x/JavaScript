// find = finds specific item in the array. Returns the item itself.
// findIndex = get index of an Item.
// every = if all the items match the condition returns true else false.
// some = if any of the one item match the condition returns true else false.

const person = ["Anna", "Brock", "Chase", "DeCock", "Espesia"];
const newGrades = ["a", "b", "c", "d", "e"];
const same = [1, 1, 1, 1, 1];

// find
const chase = person.find((item) => item == "Chase");
console.log(chase);

// findIndex
console.log(newGrades.findIndex((item) => item == "d"));

// every
console.log(newGrades.every((item) => item == "a"));
console.log(same.every((item) => item == 1));

// some
console.log(newGrades.some((item) => item == "a"));
