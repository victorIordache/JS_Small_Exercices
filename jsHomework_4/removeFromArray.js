const arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];

function remove(arr){
    const newArray =[];
    for(i=0;i<=arr.length-1;i++){
        if(Boolean(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

remove(arr);