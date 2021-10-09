// When we assign a primitive data type and store it in some other variable, any changes made to another variable won't affect the
// original variable value. Similarly if any changes is made to the new copied variable won't affect the original variable value.

let number = 5;
let num2 = 10;
console.log(number);
console.log(num2);
number = 25;
console.log(number);
console.log(num2);
num2 = 50;
console.log(number);
console.log(num2);

// For non-primitive data type if any changes made to the original object or copied object will effect both of the objects.
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = arr;
console.log(arr);
console.log(arr2);
arr2[3] = 100;
console.log(arr);
console.log(arr2);
arr[1] = 289;
console.log(arr);
console.log(arr2);
