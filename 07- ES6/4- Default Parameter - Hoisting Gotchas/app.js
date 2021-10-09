const john = "john";
const peter = "peter";

// With Arrow function Hoisting doesn't work since they are stored in a variable and we can't access variables before decalring them.

// sayHello();

// Default Parameters
function sayHi(name = "chirag") {
  console.log(`Hi ${name}`);
}

// Default Parameters
const sayHello = (name = "Same") => console.log(`Hello ${name}`);

sayHi();
sayHi(peter);
sayHello();
sayHello(john);
