const str1 = "Hello";
const str2 = "world";
const result = str1 - str2;
// Returns Nan = Not a number
console.log(result);

const num1 = "20";
const num2 = "55";
const result2 = num1 - num2;
// Return -35, which is the correct result for 20 - 55 = -35. Also the returned try is an integer value.
console.log(result2);

/*
When we apply mathematical operations on Strins, what Js does it tries to convert those strings into the number, and if it can perform those operation it goes ahead and returns an integer value, else returns Nan.
*/

const result3 = num1 * num2;
const result4 = num2 / num1;
console.log(result3);
console.log(result4);

// This will return '2055' as a string, since it will concatenate it.
const result5 = num1 + num2;
console.log(result5);

const num3 = 10;
const num4 = "15";
// This will also return '1015' as a string.
const result6 = num3 + num4;
console.log(result6);

// While addding if both of them are String output will be string, if one of them is string and another one is Integer we will still get string as an output.

// Converting String to number
let x = "5";
y = Number(x);
y2 = parseInt(x);
log(y);
log(y2);

// Converting to float ==> parseFloat()
// Converting to String ==> num.toString(), String(num)
// Converting to Number ==> parseInt()
