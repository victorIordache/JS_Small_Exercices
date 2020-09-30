var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let number = parseInt(prompt("Please enter the number of the month"), 10);
let index = parseInt(number, 10) - 1;

if (index in months) {
  console.log("The name of the month is: " + months[number - 1]);
} else {
  alert("Wrong number");
}
