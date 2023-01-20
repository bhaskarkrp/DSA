var arr = [2, 3, 4, 6];
var k = 3;

console.log(maxSubArray(arr, k));

function maxSubArray(arr,  k) {
    // var left = 0;
    // var right = arr.length-1;
    var sum = 0;
    var max = 0;
    var len = 0;
    var count = 0;

    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    if(sum % k !== 0) {
        return  1;
    }else{
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] % k !== 0) {
                len = arr.length-1-i;
                if(len > max){
                    max = len;
                }
            }
        }
        if(max === 0){
            return 0;
        }
        for(var i = arr.length-1; i >= 0; i--) {
            if(arr[i] % k !== 0) {
                if(i > max) {
                    max = i;
                }
            }
        }
    }
    sum = 0;
    for(var i = 0; i < max; i++) {
        sum += arr[i];
    }
    if(sum % k !== 0){
        count++;
    }

    for(var i = max; i < arr.length; i++){
        sum = sum - arr[i-max] + arr[i];
        if(sum % k !== 0){
            count++;
        }
    }

    return count;

}