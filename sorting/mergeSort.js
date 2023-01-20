var n = 5;
var arr = [3, 5, 0, 9, 8];

mregeSort(0, n-1, arr);
console.log(arr);


function mregeSort(low, high, arr) {
    if(low < high){
        var mid = Math.floor(low + (high - low) / 2);
        mregeSort(low, mid, arr);
        mregeSort(mid+1,high, arr);
        merge(low, high, arr, mid);
    }
}

function merge(low, high, arr, mid) {
    var left = new Array(mid - low + 1);
    var right = new Array(high - mid);
    var k = low;
    var i = 0;
    var j = 0;

    for(var l = 0; l < left.length; l++){
        left[l] = arr[l+low];
    }

    for(var r = 0; r < right.length; r++){
        right[r] = arr[r+1+mid];
    }

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            arr[k] = left[i];
            i++;
            k++;
        }else{
            arr[k] = right[j];
            j++;
            k++;
        }
    }
    while(i < left.length){
        arr[k] = left[i];
        i++;
        k++;
    }

    while(j < right.length){
        arr[k] = right[j];
        j++;
        k++;
    }
}