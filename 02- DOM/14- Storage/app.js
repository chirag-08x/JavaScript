// Web Storage API = provided by the browser,.
// session storage, local storage, setItem, getItem, removeItem, clear.

// session storage = only persists the data between the session, i.e. while our tab is opened we can manipulate our data.

// local storage = persists the data between opening and closing of the tab. We can close the tab or even browser but we wil still have data in our local storage.

// If I use the same key later in the code we will overwrite the value for that key.
localStorage.setItem("name", "john");
localStorage.setItem("friend", "peter");
localStorage.setItem("job", "developer");
localStorage.setItem("address", "street 69");

const name = localStorage.getItem("name");
console.log(name);

localStorage.removeItem("name");

localStorage.clear();

// Multiple Values

// JSON.stringfy()
// JSON.parse()

const friends = ["John", "Peter", "Lily", "Bob"];

// This will store the value from friends array in the local storage, but not as an Array, instead it will take all the values from the friends array, concatenate them into a single string and store them as a single string.
localStorage.setItem("friends", friends);

const values = localStorage.getItem("friends");
// This will return letter "J", since we are not getting back an Array instead a string.
console.log(values[0]);

localStorage.setItem("friends", JSON.stringify(friends));

const valuess = JSON.parse(localStorage.getItem("friends"));
console.log(valuess[0]);

// Check for the values in storage

// If the key is not present in storage it will return null
console.log(localStorage.getItem("fruits"));

let fruits = ["apples", "bananas", "pears"];

if (localStorage.getItem("fruits")) {
  fruit_values = JSON.parse(localStorage.getItem("fruits"));
  console.log(fruit_values);
} else {
  localStorage.setItem("fruits", JSON.stringify(fruits));
}
