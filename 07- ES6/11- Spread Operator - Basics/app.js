// Spread Operator allows an iterable object to spread/expand individually inside reciever. Split into single items and creates a copy of it. Used to store data in Array, basically creates array with the iterable object items. Spread operator splits the items into single items.
const udemy = "udemy";
const letters = [...udemy];
console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["anna", "jennifer", "scarlett"];
const bestFriend = "arnold";

const mixedFriends = [...boys, bestFriend, ...girls];
console.log(mixedFriends);
// Does not mutate the original Array since it creates a copy.
mixedFriends[2] = "Harry";
console.log(mixedFriends);
console.log(boys);
