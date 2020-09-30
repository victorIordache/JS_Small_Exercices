const array = ['a','b','a','a','1','2',3,4,5,5,3];
// convert the array to a Set (object-type), Set only allows unique values,all duplicates will be removed
// after this convert it back to an array.
Array.from(new Set(array));
