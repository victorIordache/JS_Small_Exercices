let item = {
  name: "standard",
  price: 0,
  quantity: 0,
};

let subTotal = 0;
let Total = 0;

let totalItems = parseInt(prompt("How many items do you have?"), 10);

for (let i = 0; i < totalItems; i++) {
  let items = Object.create(item);

  items.name = prompt("What name does this item have?");
  items.price = prompt("Enter the price of this " + items.name);
  items.quantity = prompt("Enter the quantity of " + items.name);
  subTotal += parseInt(items.price, 10) * parseInt(items.quantity, 10);
}

function amountWithTax(subTotal, taxRate) {
  return (Total = subTotal + percentage(subTotal, taxRate));
}

function percentage(num, per) {
  return (num / 100) * per;
}
console.log("Subtotal: " + subTotal);
console.log("Tax: " + (amountWithTax(subTotal, 5.5) - subTotal));
console.log("Total: " + amountWithTax(subTotal, 5.5));
