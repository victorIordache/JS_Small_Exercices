const array1 = ['a','b','c','d'];
const array2 = ['b','c','c','c','c','d','e','f'];


function computeUnion(arr1,arr2){
    const array3 = array1.concat(array2);  
    array3.sort();
    return Array.from(new Set(array3));
}

computeUnion(array1,array2);