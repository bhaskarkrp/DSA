var N = 5;
var arr = [1, 2, 3, 4, 5];
var k = 7;

console.log(test(N, arr, k));

function test(N, arr, k) {
    var left = 0;
    var right = N-1;
    var max = 0;

    arr.sort(function(a, b) {
        return a - b;
    })

    while (left < right) {
        var s = arr[left] + arr[right];
        if(s >= k){
            right--;
        }else{
            if(s > max){
                max = s;
            }
            left++;
        }
    }
    if(max === 0){
        return -1;
    }else{
        return max;s
    }
}