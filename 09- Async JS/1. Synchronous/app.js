// JS is a single threaded, synchronous language, i.e. it reads code from top to down line by line. It reads the next line only when current line is done.

console.log("Hello world");
console.log("Google");
boilingWater();
console.log("Facebook");
console.log("Amazon");
console.log("IBM");

function boilingWater() {
  console.log("Boiling......");
  for (let i = 0; i < 5000; i++) {
    console.log("Still not done");
  }
  console.log("done");
}
