// Conditional Statements
// <, >, >=, <=, !,
// ==  Check only for value not for Data Type i.e. "5" == 5 ==> True and 5 == 5 is also True,
// ===  Check for both value and Data Type, i.e. "5" === 5 ==> False, 5 === 5 ==> true, "5" === "5" ===> true,
// != Check for value only,
// !=== Checks for both value and Data Type.

//
if (2 > 1) {
  console.log("Working");
}

//
const value = 2 > 1;
if (value) {
  console.log("Worked");
}

//
if (1 < 2) {
  console.log(true);
}

//
if (2 <= 2) {
  console.log("Hello World");
}

//
if (3 >= 3) {
  console.log("JS");
}

//
if (2 >= 3) {
  console.log("Inside");
} else {
  console.log("Outside");
}

//
const num1 = 13;
const num2 = 14;

if (num1 > num2) {
  console.log("Number bigger");
} else if (num1 == num2) {
  console.log("Number Equal");
} else {
  console.log("None");
}

//
const value2 = false;
if (!value2) {
  console.log("Code Running");
}

//
if ("5" == 5) {
  console.log(true);
}

if (5 == 5) {
  console.log(true);
}

if ("5" === 5) {
  console.log(true);
} else {
  console.log(false);
}

if (5 === 5) {
  console.log(true);
}

if ("5" === "5") {
  console.log(true);
}

if (5 != "5") {
  console.log(true);
} else {
  console.log(false);
}

if (5 !== "5") {
  console.log(true);
}

// Falsy Values = "", '', ``, 0, -0, NaN, false, null, undefined
