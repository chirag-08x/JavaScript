async function helperFunc() {
  const c = 2 + 5;
  // This returns a promise itself.
  return c;
}

async function getSum() {
  const a = await helperFunc();
  console.log(helperFunc());
  console.log("sum of numbers is " + a);
}

getSum();

// Since async function returns the promise itself, we can eliminate using external promises. Also to catch the error we can try and catch block

async function checkChar() {
  const sum = 5 + 10;
  if (sum === 19) {
    return sum;
  }
  throw new Error("Sum is not equal");
}

async function getChar() {
  try {
    const a = await checkChar();
    console.log(a);
  } catch (error) {
    console.log(error);
  }
}

getChar();
