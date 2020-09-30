let age = prompt("What is your age?");

function qualifiedForDriving(age) {
  if (age >= 16) {
    console.log("You are old enough to legally drive.");
  } else {
    console.log("You are not old enough to legally drive.");
  }
}
qualifiedForDriving(age);
