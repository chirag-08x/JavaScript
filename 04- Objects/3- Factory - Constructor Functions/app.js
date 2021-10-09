// To create a Class,Blueprint(Class is a blueprint of objects) in JS we have two methods, Factory Function and Constructor Functions.

// ********************************************** Factory Functions **************************************************
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
  };
}

const john = createPerson("John", "Smilga");
john.fullName();
const peter = createPerson("Peter", "Anderson");
peter.fullName();
const lewis = createPerson("Lewis", "Hamilton");
lewis.fullName();

// ************************************** Constructor Functions ******************************************************
// new = Creates a new Object. This points to that specific Object. Omits the need of return statement

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love JS`
    );
  };
  console.log(this);
}

const daniel = new Person("Daniel", "Ricardo");
daniel.fullName();
const sebastian = new Person("sebastian", "Vettel");
sebastian.fullName();

// Constructor Property

// All objects in JS have access to the constructor property that returns a constructor function that created it.
// Everythin in JS is an object.

const chirag = new Person("Chirag", "Agrawal");
console.log(chirag.constructor);

const bob = {};
console.log(bob.constructor);
const list = [];
console.log(list.constructor);
const sayHi = function () {};
console.log(sayHi.constructor);

const suzie = new chirag.constructor("Suzie", "Matthews");
suzie.fullName();
