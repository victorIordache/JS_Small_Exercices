var array = [2,5,9,6];
var target = 5;

function remove_array_ellement(arr,remove){
    var newArray=[];
    for(i=0;i<=arr.length-1;i++){
        if(arr[i]!=remove){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

remove_array_ellement(array,target);