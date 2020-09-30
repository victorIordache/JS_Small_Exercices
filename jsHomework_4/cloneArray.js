console.log("Test data:");

function cloneArray(arr) {}

arr1 = [1, 2, 3];
arrCopy1 = [];

arr2 = [1, 2, [3, 4]];
arrCopy2 = [];

function cloneArray(array, arrayCopy) {
  for (i = 0; i < array.length; i++) {
    arrayCopy[i] = array[i];
  }
  console.log(arrayCopy);
}
cloneArray(arr1, arrCopy1);
cloneArray(arr2, arrCopy2);
