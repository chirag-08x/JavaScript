// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const alpha = ["b", "c", "a", "d", "e"];
const alpha2 = ["B", "C", "A", "D", "E"];
const alpha3 = ["B", "c", "a", "D", "e"];

const names = ["chirag", "akshat", "rahil", "hammad"];
const names1 = ["CHIRAG", "AKSHAT", "RAHIL", "HAMMAD"];
const names2 = ["CHIRAG", "akshat", "rahil", "HAMMAD"];

const digits = [1, 10, 333, 1585, 786, 452];

alpha.sort();
console.log(alpha);
alpha2.sort();
console.log(alpha2);
alpha3.sort();
console.log(alpha3);

alpha.sort((a, b) => {
  return a - b;
});
console.log("alpha", alpha);

// Sorts based on first letter of the name
names.sort();
console.log(names);
names1.sort();
console.log(names1);
names2.sort();
console.log(names2);

digits.sort();
// Not the correct output
console.log(digits);

// For sorting digits we need call a compare which compared 2 of the values and based on the returned result swap them
// On comparing "a" and "b" :
/* 
1. < 0 ---> a
2. 0 ---> nothing will happen
3. > 0 ---> b
*/

digits.sort((a, b) => {
  return a - b;
});

console.log(digits);

// In descending order

digits.sort((a, b) => {
  return b - a;
});

console.log(digits);
