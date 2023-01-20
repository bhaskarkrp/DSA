// OJ Link - https://oj.masaischool.com/contest/2083/problem/01

var k = 3;
var arr = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9];
var sum = 0;
for(var i = 0; i < k; i++) {
    sum += arr[i];
}
var max = sum;

for(i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i-k];
    if(sum > max) max = sum;
}
console.log(max);