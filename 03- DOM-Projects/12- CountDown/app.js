const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jume",
  "July",
  "August",
  "Sepetember",
  "October",
  "November",
  "December",
];

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturaday",
];

const countdownTime = document.querySelector(".countdown-time");
const giveawayTime = document.querySelector(".end-info");
const items = document.querySelectorAll(".countdown-time h2");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 8, 20, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const week = weekDays[futureDate.getDay()];

giveawayTime.innerHTML = `giveaway ends at ${week}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const diff = futureTime - today;
  //   console.log(diff);
  // 1s = 1000ms
  // 1min = 60s
  // 1hour = 60min
  // 1day = 24hour

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(diff / oneDay);
  let hrs = Math.floor((diff % oneDay) / oneHour);
  let mins = Math.floor((diff % oneHour) / oneMinute);
  let secs = Math.floor((diff % oneMinute) / 1000);

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  }

  // set values
  const values = [days, hrs, mins, secs];
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (diff < 0) {
    clearInterval(countdown);
    countdownTime.classList.add("final");
    countdownTime.innerHTML = `<h4> Sorry the giveaway has ended </h4>`;
  }
}

// setInterval Calls the getRemainingTime function every 1000ms or 1s.
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
