function array_filled(xTimes,numberToAdd){
    var array = [];
    for(i=0;i<xTimes;i++){
        array.push(numberToAdd);
    }
    return array;
}

array_filled(6,0);
