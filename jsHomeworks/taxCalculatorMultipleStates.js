let amount = prompt("What is the order amount?");
let state = prompt("What state do you live in?");

function getTotal(amount, state) {
  let total = 0;
  if (state == "Wisconsin") {
    let county = prompt("County of residence?");
    if (county == "Eau Claire") {
      return (total =
        parseFloat(amount, 10) + parseFloat((5 / 100) * amount, 10));
    } else if (county == "Dunn county") {
      return (total =
        parseFloat(amount, 10) + parseFloat((4 / 100) * amount, 10));
    } else {
      console.log("I don't recognize this county");
    }
  } else if (state == "Illinois") {
    return (total =
      parseFloat(amount, 10) + parseFloat((8 / 100) * amount, 10));
  } else {
    return (total += amount);
  }
}
let a = parseFloat(getTotal(amount, state), 10);
switch (state) {
  case "Wisconsin":
    console.log("The tax is: $" + parseFloat(a - parseFloat(amount, 10), 10));
    console.log("The total is: " + "$" + a);
    break;
  case "Illinois":
    console.log("The tax is: $" + parseFloat(a - parseFloat(amount, 10), 10));
    console.log("The total is: " + "$" + a);
    break;
  default:
    console.log("The total is: " + "$" + amount);
    break;
}
