let weight = prompt("Insert your weight in pounds");
let height = prompt("Insert your height in inches");

function calculateBMI(weight, height) {
  let bmi = (weight / Math.pow(height, 2)) * 703;
  if (bmi >= 18.5 && bmi <= 25) {
    console.log(
      "Your BMI is: " + bmi + "\n You are within the ideal weight range"
    );
  } else if (bmi < 18.5) {
    console.log("Your BMI is: " + bmi + "\n You are underweight");
  } else {
    console.log("Your BMI is: " + bmi + "\n You are overweight");
  }
}

calculateBMI(weight, height);
