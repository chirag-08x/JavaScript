// floor = rounds down the value.
// ceil = round up the value.
// sqrt = square root of a number.
// PI = value of pi.
// min = returns minimum value.
// max = returns maximum value.
// random = return random number b/w (0 - 0.9999999999999999) inclusive
const number = 4.56;

const result = Math.floor(number);
console.log(result);

const result2 = Math.ceil(number);
console.log(result2);

const num2 = 36;
const result3 = Math.sqrt(num2);
console.log(result3);

console.log(Math.PI);

console.log(Math.min(2, 3, 7, 8, 5));
console.log(Math.max(2, 3, 7, 8, 5));

console.log(Math.random());

// Random number b/w 0 - 9.999999999999 inclusive with decimals
console.log(Math.random() * 10);

// Random number b/w 0 - 9 inclusive without decimals
console.log(Math.floor(Math.random() * 10));

// Random number b/w 0 - 10 inclusive without decimals
console.log(Math.ceil(Math.random() * 10));
