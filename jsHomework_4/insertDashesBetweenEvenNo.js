var str = prompt("Say a number: ");
var result = "";
function addDashes(str) {
  for (i = 0; i < str.length - 1; i++) {
    if (str[i] % 2 == str[i + 1] % 2) {
      result = str.slice(0, i) + "-";
    }
  }
  return result;
}
addDashes(str);
