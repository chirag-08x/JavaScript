const bob = {
  first: "bob",
  last: "Sander",
  city: "NYC",
  siblings: {
    sister: "anna",
    brother: "peter",
  },
};

// The variable name should match the property name, in Object Destructuring. Properties that doesn't exist or their name doesn't match with property in that case we will have undefined.
const { first, last, cities, zip, wrong } = bob;
console.log(first);
console.log(last);
console.log(cities);
console.log(zip);
console.log(wrong);
console.log();

// Skipping Properties and Accessing Properties with a different name and accessing nested properties
// For skipping a property just don't type that property name and move on with the next, property.
const {
  first: firstName,
  city,
  siblings,
  siblings: { sister: favChild, brother },
} = bob;
console.log(firstName);
console.log(city);
console.log(siblings);
console.log(favChild);
console.log(brother);
