const bob = {
  first: "bob",
  last: "sanderrs",
  city: "NYC",
  siblings: {
    sister: "anna",
  },
};

// function printPerson(info) {
//   console.log(info.first);
//   console.log(info.last);
//   console.log(info.siblings.sister);
// }
// printPerson(bob);

function printPerson(info) {
  const {
    first,
    last,
    siblings: { sister },
  } = info;
  console.log(first, last, sister);
}
printPerson(bob);

// Or We can also destructure them in the function Argument only.function printPerson(info) {
function printInfo({ first, last, siblings: { sister } }) {
  console.log(first, last, sister);
}
printInfo(bob);
