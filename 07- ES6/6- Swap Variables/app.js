let first = "bob";
let second = "peter";
console.log("First " + first);
console.log("Second " + second);
console.log();

// Old Way
// let temp = first;
// first = second;
// second = temp;
// console.log("first " + first);
// console.log("second " + second);
// console.log();

[second, first] = [first, second];
console.log("First " + first);
console.log("Second " + second);
console.log();
