var year = new Date().getFullYear();

let currentAge = prompt("What is your current age");
let retireAge = prompt("At what age would you like to retire?");

console.log(
  "You have " + (retireAge - currentAge) + "years left untill you can retire"
);

console.log(
  "It's" + year + ", so you can retire in" + (year + (retireAge - currentAge))
);
