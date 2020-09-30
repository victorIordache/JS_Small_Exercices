let startingAmount = prompt("What is the principal amount?");
let rate = prompt("What is the rate?");
let years = prompt("What is the number of years");
let compound = prompt(
  "What is the number of times the interest is compounded per year?"
);

function compoundInterest(startingAmount, rate, years, compound) {
  let amount = 0;
  amount =
    parseInt(startingAmount, 10) +
    parseInt(startingAmount * (rate / years) * compound * years, 10);

  console.log(
    startingAmount +
      " invested at " +
      rate +
      " for " +
      years +
      " years compounded " +
      compound +
      " times per year is " +
      amount
  );
}
// TODO
compoundInterest(startingAmount, rate, years, compound);
