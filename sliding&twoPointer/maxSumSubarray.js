var arr = [2, 5, 1, 8, 2, 9, 1];
var target = 3;

console.log(findMax(arr, target));

function findMax(arr, k) {
    var sum = 0;
    for(var i = 0; i < k; i++) {
        sum += arr[i];
    }
    var max = sum;

    for(var i = k; i < arr.length; i++) {
        sum = sum + arr[i] - arr[i-k];
        // console.log(sum);
        if(sum > max) max = sum;
    }

    return max;
}