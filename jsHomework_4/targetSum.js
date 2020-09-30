var numbers = [10,20,10,40,50,60,70];
var target =50;

function findIndexs(arr,target){
    for(i=0;i<=arr.length-1;i++){
        for(j=i+1; j<=arr.length -2;j++){
            if ( arr[i] + arr[j] == 50){
                console.log (i + " " + j);
            }
        }
    }
}

findIndexs(numbers,target);