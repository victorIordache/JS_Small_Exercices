function useTroubleshooting() {
  var answerQuestion = prompt("Is the car silent when you turn the key?");

  if (answerQuestion == "yes") {
    answerQuestion = prompt("Are the battery terminals corroded?");
    if (answerQuestion == "yes") {
      alert("Clean terminals and try again");
    } else if (answerQuestion == "no") {
      alert("Replace cables and try again");
    }
  } else if (answerQuestion == "no") {
    answerQuestion = prompt("Does the car make a clicking noise?");
    if (answerQuestion == "yes") {
      alert("Replace the battery.");
    } else if (answerQuestion == "no") {
      answerQuestion = prompt("Does the car crank up but fail to start?");
      if (answerQuestion == "yes") {
        alert("Check spark plug connections.");
      } else if (answerQuestion == "no") {
        answerQuestion = prompt("Does the engine start and then die?");
        if (answerQuestion == "yes") {
          answerQuestion = prompt("Does your car have fuel injection?");
          if (answerQuestion == "no") {
            alert("Check to ensure the choke is opening and closing");
          } else {
            alert("Get it in for service.");
          }
        } else {
          alert("Impossible :))");
        }
      }
    }
  } else {
    console.log("You have to respond with yes or no only!");
  }
}

useTroubleshooting();
//This excercise could be resolved with a binary tree.
