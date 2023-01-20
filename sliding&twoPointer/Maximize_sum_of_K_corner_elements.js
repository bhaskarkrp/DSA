var arr = [8, 4, 4, 8, 12, 3, 2, 9];
var k = 3;


var sum = 0;
var max = 0;

for(var i = 0; i < k; i++) {
    sum += arr[i];
}

max = sum;
var end = arr.length-1;
for(var i = k-1; i >= 0; i--) {
    sum = sum - arr[i] + arr[end];
    if(sum > max) max = sum;
    end--;
}
console.log(max, s-max);