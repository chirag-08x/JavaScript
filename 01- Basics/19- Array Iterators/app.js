// Array Iterators = forEach, map, filter, find, reduce
// Iterates over the array, no for loop required.
// Accepts CallBack Function as an argument, calls callback against each item in the array. Reference item in the callback parameter

const people = [
  { name: "Harry", age: 20, position: "SDE", id: 1, salary: 200 },
  { name: "Ron", age: 22, position: "Designer", id: 2, salary: 300 },
  { name: "Hermoine", age: 19, position: "Boss", id: 3, salary: 500 },
  { name: "Severus", age: 42, position: "Professor", id: 4, salary: 400 },
  { name: "Severus", age: 150, position: "Headmaster", id: 5, salary: 400 },
];

// ##############################################################################################################################
// forEach = Doesn't returns the new array. Can be used to change the values of the original Array.
// forEach((element, index, array) => {})
// We can also setup this callback function inside our forEach method.
function showPerson(person) {
  console.log(person);
}

people.forEach(showPerson);
// OR
people.forEach(function (human) {
  console.log(human);
});

// #############################################################################################################################
// map = returns the new array. Does not change the size of original Array. This will always return new array which will be size of the original array, if we try to do conditional statements inside map we will get boolean array, i.e. if we do person.age > 22, we will get boolean array it will not filter out the items which are less than 22 of age. map((element, index, array) => {})

const ages = people.map(function (person) {
  return person.age;
});
console.log(ages);

const newPeople = people.map(function (person) {
  return {
    fname: person.name,
    newAge: person.age + 10,
  };
});

console.log(newPeople);

// ##############################################################################################################################
// Filter = Returns the new Array. Can manipulate the size of the array. Returns based on the condition. New array size does not necessarily needs to be equal to the original array size. filter((element, index, array) => {})

const youngPeople = people.filter(function (person) {
  return person.age < 30;
});

console.log(youngPeople);

// ##############################################################################################################################
// find = Returns Single instance(value). Returns first match, if not found returns unidentified. Great for getting unique values.
const pId = people.find(function (person) {
  return person.id === 3;
});
console.log(pId);

const pName = people.find(function (person) {
  return person.name === "Severus";
});
console.log(pName);

const names = ["Suzie", "El", "Madmax", "Steve"];
const n = names.find(function (person) {
  return person.name == "Hopper";
});
console.log(n);

// ##############################################################################################################################
// reduce = iterates over the array, takes in callback function.
// reduces the value in the array to a single value.
// In the callback function we will now have 2 parameter in case of reduce
// 1st parameter = ('acc') - total of all calculations.
// 2nd parameter = ('curr') - current Iteration.
/*
Syntax = array.reduce(function(acc, curr){
    functionality
    return acc
}, value_type_to_return) 
*/
// value_type_to_return ==> If Num(0), Array([]), Object({}) etc
/*
We can also set value_type_to_return default value to be 200 for number, or [1,2,3] for array, then in the output we will have
the result as the default value + the changes made to that default value.
*/

const total = people.reduce(function (acc, curr) {
  acc += curr.salary;
  return acc;
}, 0);
console.log(total);
