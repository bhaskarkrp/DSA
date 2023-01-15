// OJ LINK - https://oj.masaischool.com/contest/2470/problem/02

var costs = [4, 7, 8, 3, 4];
var n = costs.length;
var arr = [];
var target = n;

for(var i = 0; i < n; i++){
    var a = [];
    a.push(i+1);
    a.push(costs[i]);
    arr.push(a);
}

arr.sort(function(a, b){
    return a[1] - b[1];
});

var sum = 0;
// console.log(arr);

for(i = 0; i < n; i++){
    if(arr[i][0] <= target){
        var r = target - arr[i][0] + 1;
        sum += (r*arr[i][1]);
        target = target - r;
    }
}

console.log(sum);