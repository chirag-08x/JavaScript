// Though JS reads code from top to bottom line by line, but that doesn't mean it can't run code in the background, in that case the code that is being executed in the background will have to until the code written below it gets executed.

// Reads line by line code ---> Found a line a code that will run in the background(start executing the background code) ---> Till the background code is running the code below it gets executed ---> The output of code that was running in the background gets printed.

// This functionality of JS makes is Asynchronous. However JS is still synchronous, bcoz Browser Provides us setTimeOut Function, it doesn't comes with JS. Thats how JS becomes a bit Asynchronous for some time.
// The setTimeOut function is not a JS function, it's the browser function, i.e. browser provides that functinality.
// Browser Provided Functions = Fetch Data, Get Geolocation, setTimeOut, setTimer, etc

// In this case the output will be = boiling ---> chop carrots ---> done.
// Since the boilWater function is running in the background due to setTimeOut() function, it will execute the remaining code i.e. chop carrots.
// Even if the time passed is 1ms, the code that is being executed in the background will wait to print it's output until the rest of the code is done executing.
// All the browser provided function will execute Asynchronously.

// Though this was supposed to happen in 1s it still has to wait until the for loop is completed. Even if we pass 0 we will have same functionality.
boilWater(1000);
console.log("Chop Carrots");
for (let i = 0; i < 10000; i++) {
  console.log("Still busy");
}

function boilWater(time) {
  console.log("boiling......");
  setTimeout(() => {
    console.log("done");
  }, time);
}
