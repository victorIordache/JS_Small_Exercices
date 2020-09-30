console.log("Press C to convert from Fahrenheit to Celsius");
console.log("Press F to conver from Celsius to Fahrenheit");

let option = prompt("Choose your type of conversion");

console.log("Your choice: " + option);
switch (option) {
  case "C":
    let tempFahrenheit = prompt("Please enter the temperature in Fahrenheit: ");
    console.log(
      "The temperature in Celsius is: " +
        convertTemperature(option, tempFahrenheit)
    );
    break;
  case "F":
    let tempCelsius = prompt("Please enter the temperature in Celsius: ");
    console.log(
      "The temperature in Fahrenheit is: " +
        convertTemperature(option, tempCelsius)
    );
    break;
  default:
    console.log("Choose one option of the above");
    break;
}

function convertTemperature(option, temperature) {
  if (option == "C") {
    return (celsius = ((temperature - 32) * 5) / 9);
  }
  if (option == "F") {
    return (fahrenheit = (temperature * 9) / 5 + 32);
  }
}
