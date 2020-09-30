var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var maximumFreq = 1;
var counter = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) counter++;
    if (maximumFreq < counter) {
      maximumFreq = counter;
      item = arr1[i];
    }
  }
  counter = 0;
}

console.log(
  "The most frequent item is : " +
    item +
    ", it appearead " +
    maximumFreq +
    " times"
);
