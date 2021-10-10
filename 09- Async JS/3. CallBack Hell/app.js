// Make Soup
// boil water 10s
// chop carrots
// add carrots boil for 5s
// chop onion
// add onion and boil for another 5s

// If we try to do this all the code below the function will get executed first, and we won't be able to make soup with the right flow/instructions.
// boilWater();
// console.log("Chop carrots");
// boilWater();
// console.log("chop onion");
// boilWater();

// function boilWater() {
//   console.log("boiling");
//   setTimeout(() => {
//     console.log("done boiling");
//   }, 1000);
// }

/*
To counter the problem above we use CallBack hell, in Callback Hell we pass the callback functions inside another callback functions.
*/

// Syntax is bit confusing, we can solve that using Promises. The another setTimeOut() function will only start executing after the setTimeOut() function before it is being finished executing, they won't run simultaneously.
boilWater();
function boilWater() {
  console.log("boiling water ............");
  setTimeout(() => {
    console.log("done boiling water");
    console.log("add carrots");
    setTimeout(() => {
      console.log("carrots are done boiling");
      console.log("chop Onion");
      setTimeout(() => {
        console.log("done boiling onion");
        console.log("soup is ready to serve");
      }, 5000);
    }, 5000);
  }, 10000);
}

// If we set up our function like that all the setTimeout will run simultaneously, i.e.
// boiling water ............
// done boiling carrots
// add onion
// done boiling onion
// soup is ready to serve
// done boiling water
// add carrots

// function boilWater() {
//   console.log("boiling water ............");
//   setTimeout(() => {
//     console.log("done boiling water");
//     console.log("add carrots");
//   }, 10000);
//   setTimeout(() => {
//     console.log("done boiling carrots");
//     console.log("add onion");
//   }, 5000);
//   setTimeout(() => {
//     console.log("done boiling onion");
//     console.log("soup is ready to serve");
//   }, 5000);
// }
