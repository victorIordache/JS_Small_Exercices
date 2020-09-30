var string = prompt("Insert a string.");

function swapLetters(string){
    var arr =string.split("");
    for(i=0 ;i<=arr.length-1;i++){
        if(arr[i] >= 'A' && arr[i] <= 'Z'){
            arr[i] = arr[i].toLowerCase();
        }else{
            arr[i] = arr[i].toUpperCase();
        }
    }

    return arr.join("");
}

swapLetters(string);