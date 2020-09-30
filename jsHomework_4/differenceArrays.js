var arr1 = [1,2,3,6,4,7,7,5];
var arr2= [2,3,5];

function findDiff(arr1,arr2){
    let difference =[];
    return difference = arr1.filter(x => !arr2.includes(x));
}
findDiff(arr1,arr2);