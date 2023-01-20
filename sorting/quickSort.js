var arr = [5, 6, 4, 8, 1, 2, 9, 5];
var n = arr.length;

quickSort(n,0, n-1, arr);
console.log(arr);

function quickSort(n, low, high, arr) {
    if(low > high){
        return
    }

    var index = partition(n, low, high, arr);
    quickSort(n, low, index-1, arr);
    quickSort(n, index+1, high, arr);
}

function partition(n, low, high, arr) {
    var pivot = arr[low];
    var i = low;
    var j = high;

    while(i < j) {
        while(arr[i] <= pivot && i < high){
            i++;
        }

        while(arr[j] > pivot && j > low){
            j--;
        }

        if(i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[j], arr[low]] = [arr[low], arr[j]];

    return j;
}