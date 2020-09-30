function last(arr, n) {
  var arrCopy = [];
  if (typeof n !== "undefined") {
    for (i = arr.length - n; i < arr.length; i++) {
      arrCopy.push(arr[i]);
    }
  } else {
    arrCopy.push(arr[arr.length - 1]);
    if (n > arr.length - 1) {
      arrCopy.slice(arrCopy.length - n, arrCopy.length);
    }
  }
  return arrCopy;
}
