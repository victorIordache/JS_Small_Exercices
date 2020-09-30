let people = prompt("How many people?");
let pizzas = prompt("How many pizzas do you have?");
let slicesPerPizza = prompt("How many slices does a pizza have?");

console.log(people + " people with " + pizzas + " pizzas");

function slicesPerPerson(people, pizzas, slicesPerPizza) {
  let totalSlices = pizzas * slicesPerPizza;
  let slicesPerson = Math.floor(totalSlices / people);
  let leftOvers = totalSlices % people;
  return [slicesPerson, leftOvers];
}
let values = slicesPerPerson(people, pizzas, slicesPerPizza);
let first = values[0];
let second = values[1];
console.log("Each person gets " + first + " pieces of pizza");
console.log("There are " + second + " leftover pieces");
