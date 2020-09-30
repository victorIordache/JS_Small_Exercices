var length = prompt("What is the length of the room in feet?");
var width = prompt("What is the width of the room in feet?");

function convertToMeters(valFeet) {
  return (valFeet = valFeet * 0.09290304);
}

console.log(
  "You entered dimensions of " + length + " feet by " + width + " feet."
);
console.log(
  "The area is \n " +
    length * width +
    " feet \n " +
    convertToMeters(length * width) +
    " square meters"
);
