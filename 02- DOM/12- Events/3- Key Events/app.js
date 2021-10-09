// Key Events = It takes place When a key is pressed on the keyboard.

// keypress = when key is pressed.
// keydown = when key is down. If we hold a key pressed this event will fire.
// keyup = when key is released.

const nameInput = document.getElementById("name");

// nameInput.addEventListener("keypress", function () {
//   console.log("You pressed a key");
// });

// nameInput.addEventListener("keydown", function () {
//   console.log("key is down");
// });

nameInput.addEventListener("keyup", function () {
  //   console.dir(nameInput);
  console.log(nameInput.value);
});
