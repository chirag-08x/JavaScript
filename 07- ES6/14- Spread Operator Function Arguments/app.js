const numbers = [10, 20, 25, 14, 11, 9, 8];
console.log(Math.max(...numbers));

const sayHello = (fname, lname) => {
  console.log(`Hello my full name is ${fname} ${lname}`);
};

// If there is an extra argument/item in the array it will get ignored
const names = ["John", "Parker" /*"Peter"*/];
sayHello(...names);
