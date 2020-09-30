let principal = prompt("Enter the principal: ");
let interest = prompt("Enter the rate of interest: ");
let time = prompt("Enter the number of years: ");

function investment(principal, interest, time) {
  let amount =
    parseInt(principal, 10) +
    parseInt((principal * (interest * time)) / 100, 10);
  console.log(
    "After " +
      time +
      " years at " +
      interest +
      ", the investment will be worth " +
      amount
  );
}

investment(principal, interest, time);
