let str = "2.88";

// Number
// Converts the number exactly to what it was originally i.e. won't convert 2.14 to integer or float.
newNum = Number(str);
console.log(newNum, typeof newNum);

// parseInt
// Convers the number into floor integer
newNum2 = parseInt(str);
console.log(newNum2, typeof newNum2);

// parseFloat
// Coverts to float
newNum3 = parseFloat(str);
console.log(newNum3, typeof newNum3);

let num = 5.56;

// String
// Coverts to string
newStr = String(num);
console.log(newStr, typeof newStr);

// toString
// Coverts to string
newStr2 = num.toString();
console.log(newStr2, typeof newStr2);
