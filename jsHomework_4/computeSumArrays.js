function sum(array1, array2) {
    return Array.from(
      {length: Math.max(array1.length, array2.length)},
      (_, i) => (array1[i] || 0) + (array2[i] || 0)
    );
  }
  Array.from({length: 5},(_,i))
  console.log(sum([1, 2, 3, 4], [5, 6, 7, 8, 100]));