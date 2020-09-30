var length = prompt("What is the length of the room?");
var width = prompt("What is the width of the room?");

var gallonsQuantity = Math.ceil((length * width) / 350);

console.log(
  "You will need to purchase " +
    gallonsQuantity +
    " gallons of paint to cover " +
    length * width +
    " square feet"
);
