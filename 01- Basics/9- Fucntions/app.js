// If we pass in something as parameter and don't pass it's value then it will come out as undefined.
function print_names(names, not_given) {
  console.log("Name of current User is :", names);
  console.log(not_given);
}
print_names("Chirag");
print_names("John");

// m to cm
function convert(value) {
  return value * 100;
}
a = convert(2);
d = convert(5);
console.log(a);
console.log(d);

// Anonymous Function = We can either have a name for the function for example addValues(num1, num2) or we can directly type out our
// parameters. Even if we give name to the anonymous function we can't call that function by it's name, we can only call it by the
// variable name in which it is stored.

const add = function addValues(num1, num2) {
  return num1 + num2;
};

// Will Return Error
// a = addValues(5, 10);
// console.log(a);

// Same as the above anonymous function, with a different variable name and no function name.
const addVal = function (num1, num2) {
  return num1 + num2;
};

const SumOfVal = addVal(10, 20);
console.log(SumOfVal);
