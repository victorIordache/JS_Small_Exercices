let euro = prompt("How many euros are you exchanging?");
let rate = prompt("What is the echange rate of euro?");

function exchangeToUSD(euro, rate) {
  let usd = euro * rate;

  console.log(
    euro +
      " euros at an exchange rate of " +
      rate +
      " is " +
      usd +
      " U.S. dollars."
  );
}
exchangeToUSD(euro, rate);
