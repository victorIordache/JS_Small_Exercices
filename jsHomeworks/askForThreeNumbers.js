var numbers = [];

var first_number = parseInt(prompt("Enter the first number"), 10);
var second_number = parseInt(prompt("Enter the second number"), 10);
var third_number = parseInt(prompt("Enter the third number"), 10);

function verifyNumbers(first, second, third) {
  if (first != second && second != third) {
    return true;
  } else {
    return false;
  }
}
if (verifyNumbers(first_number, second_number, third_number)) {
  numbers.push(first_number);
  numbers.push(second_number);
  numbers.push(third_number);

  Math.max.apply(Math, numbers);
} else {
  alert("Numbers are not different from each other!");
}
