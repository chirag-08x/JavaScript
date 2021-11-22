// String Concatenation == Combining Strings Together

const firstName = "Chirag";
const lastName = "Agrawal";
console.log("Your full name is :" + firstName + " " + lastName);

const fullName = firstName + " " + lastName;
console.log(fullName);

const website = "google";
const url = "https://www." + website + ".com";
console.log(url);

// String Methods and properties

let text = "Peter Parker";
// Length ==> Counts whitespaces too
console.log(text.length);
// Upper and Lower Case
console.log(text.toLowerCase());
console.log(text.toUpperCase());
// Character at an index
console.log(text.charAt(2));
console.log(text.charAt(text.length - 1));
console.log(text[2]);
// Index of an element  ==> Returns the first instance of the element, if element is not found it returns -1.
console.log(text.indexOf("P"));
console.log(text.indexOf("r"));
console.log(text.indexOf("c"));
// Trims white space from the front and end of the string;
let spaces = " hello world    ";
console.log(spaces);
console.log(spaces.length);
spaces = spaces.trim();
console.log(spaces);
console.log(spaces.length);
// startsWith and endsWith = check if the string start and ends with that element or not = CASE SENSETIVE
console.log(text.startsWith("P"));
console.log(text.startsWith("Peter"));
console.log(text.startsWith("Peter "));
console.log(text.startsWith("p"));
console.log(text.startsWith("peter"));
// checks for substring in a string
console.log(text.includes("eter"));
console.log(text.includes("arkp"));
// slices the string, from i to j - 1
console.log(text.slice(0, 5)); // index 0 - 4
console.log(text.slice(-5));
// Chaining Methods
let word = " Hello There    ";
console.log(word.trim().toLowerCase().startsWith("he"));

// Template Literals - ES6
// Backtick Characters = `string can contain both double and single quotes`
// Interpolation ${} = can be used to insert expression.
const value = `'ello there mate, "What's in the name".`;
console.log(value);

const num = 25;
console.log(
  `Today's lucky number is ${num} and here is a simple math ${5 + 3}`
);
