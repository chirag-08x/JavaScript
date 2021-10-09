// Destructuring = Faster and Easier ways to access/unpack values, kind of works same as python's Tuple Unpacking.

const fruits = ["apple", "orange", "peach", "grapes", "banana"];
const friends = ["john", "susan", "anna", "peter", "david"];

// Old Way
const apple = fruits[0];
const orange = fruits[1];
const banana = fruits[4];
console.log(apple, orange, banana);
console.log();

// Destructuring Array, can name the variables whatever we want.
const [john, enemy, person3] = friends;
console.log(john);
console.log(enemy);
console.log(person3);
console.log();

// If we try to access value/index which is not in the array while Destructuring we'll get undefined
const [test, test1, test2, test3, test4, test5] = friends;
console.log(test5);
console.log();

// Skipping values while Destructuring = put a comma(,) whatever value we want to skip.
const [p1, , p3, , p5] = friends;
console.log(p1);
console.log(p3);
console.log(p5);
