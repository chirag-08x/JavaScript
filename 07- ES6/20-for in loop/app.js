// for in loop ==> Used to iterate over the object properties. Not advised to used in arrays, especially if order is important.

const person = {
  name: "chirag",
  age: 21,
  school: "ADYPU",
  company: "amazon",
  course: "btech(cse)",
};

for (const x in person) {
  console.log(`${x} : ${person[x]}`);
}
