// Async Await does the same thing as Promises and CallBack Hell, the syntax is even more clear and there are some other upsides of using Async Await.
// Async/Await can handle errors.
// Await is going to wait till the promise is setteled
// Async itself returns a promise by default, i.e. as soon as we declare a function as async it returns a promise

// syntax -

// Normal Functions
// async function someFunc(){
//     await
// }

// Arrow Functions
// const anotherFunc = async() =>{
//     await
// }

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  // We can also assign our await to a variable. Since our resolve is not returning anything in this case, so we can run it directly

  /*
  const first = await changeColor(1000, one, "red");
  await changeColor(2000, two, "green");
  await changeColor(1000, three, "blue");
  */

  // Print undefined since we are not returning anything in resolve. This will only get printed when all the above three promises get resolved, i.e. it acts synchronously in case of await.

  //   console.log(first);

  //   We can use try and catch block for error handling, though functionality remains the same.
  try {
    const first = await changeColor(1000, one, "red");
    await changeColor(2000, two, "green");
    await changeColor(1000, three, "blue");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
});

function changeColor(time, element, color) {
  const promise = new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is problem in the selector ${element}`));
    }
  });
  return promise;
}
