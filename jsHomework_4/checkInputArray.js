console.log("Test data:");

function is_array(variable) {
  if (variable.constructor == Array) {
    return true;
  } else {
    return false;
  }
}
console.log(is_array("w3schools"));
console.log(is_array([1, 2, 3]));
