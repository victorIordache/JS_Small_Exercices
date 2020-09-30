const array = [2,5,9,6];

function getRandomIndex(arr){
    var randomIndex = Math.floor(Math.random() * arr.length); 
    return arr[randomIndex];
}
getRandomIndex(array);