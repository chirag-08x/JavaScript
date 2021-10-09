// Loops through the values of an iterable object, string, array, map, set. Not Object
// Unlike forEach, in forOf we can use break and continue.

const fruits = ["banana", "apple", "orange", "peach"];
const longname = "John smith pepper III";
let shortName = "";

for (fruit of fruits) {
  if (fruit == "peach") {
    break;
  }
  console.log(fruit);
}

for (letter of longname) {
  if (letter == " ") {
    continue;
  }
  shortName += letter;
}

console.log(shortName);
