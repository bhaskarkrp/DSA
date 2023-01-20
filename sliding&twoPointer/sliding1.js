//Given an array, find the minimum sum subarray of size K.

var arr = [10, 4, 2, 5, 6, 3, 8, 1];
var  k = 3;

console.log(findMinSum(arr, k));

function findMinSum(arr, k) {
    var sum = 0;
    // var l = 0;
    var minSum = 100000;
    for(var i = 0; i < k; i++) {
        sum += arr[i];
    }
    if(sum < minSum) {
        minSum = sum;
        var indexF = 0;
        var indexL = i-1;
    }
    for(var i = k; i < arr.length-2; i++) {
        sum = sum - arr[i-k] + arr[i];
        if(sum < minSum) {
            minSum = sum;
            indexF = i-k+1;
            indexL = i;
        }
        // l++;
    }
    // return minSum;
    return indexF + " - " + indexL;

}