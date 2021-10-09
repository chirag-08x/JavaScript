// Used to create copy of the old Array, and can also create a brand new Array. Not on the Prototype, it's Array. Property.

const nums = [1, 2, 3, 4, 5];
const newNums = Array.of(...nums);
console.log(newNums);

const moreItems = Array.of(1, "Hello", "5", ["Hello World"]);
console.log(moreItems);
