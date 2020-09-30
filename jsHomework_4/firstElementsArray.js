function first(arr, n) {
  var arrCopy = [];
  if (typeof n !== "undefined") {
    for (i = 0; i < n; i++) {
      arrCopy.push(arr[i]);
    }
  } else {
    arrCopy.push(arr[0]);
  }
  return arrCopy;
}

/*
function first(arr) {
  var copyArray = [];
  return function (n) {
    for (i = 0; i < n; i++) {
      copyArray.push(arr[i]);
    }
    return copyArray;
  };
}
 console.log(first([1,2,3])(2)); */
