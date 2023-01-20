//Find the smallest subarray length whose sum of elements is greater than `k`

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var k = 7;

console.log(findMinLength(arr, k));

function findMinLength(arr, k) {
    var left = 0;
    var sum = 0;
    var elem = arr.length-1;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if(sum < k){
        return 0;
    }
    while (sum > k) {
        sum = sum - arr[left];
        left++;
    }

    if(sum <= k){
        return left-1 + " - " + elem;
    }else{
        return sum;
    }
    // return sum;
}