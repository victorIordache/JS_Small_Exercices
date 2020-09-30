var possbileResponses = ["Yes!", "No!", "Maybe!", "Ask me later!"];

var question = prompt("Whats your question?");
var randomResponse =
  possbileResponses[Math.floor(Math.random() * possbileResponses.length)];
console.log(randomResponse);
