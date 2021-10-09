// Date object does not returns the name of the day or month instead it returns the index of the months and Days Array which we
// have to create manually.

const months = [
  "Januray",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septemeber",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
console.log(date);

const month = months[date.getMonth()];
console.log(month);

const day = days[date.getDay()];
console.log(day);

console.log(date.getDate());

console.log(date.getFullYear());

// dd/mm/yy
// Setting a date manually
const newDate = new Date("1/12/2004");
console.log(newDate);
