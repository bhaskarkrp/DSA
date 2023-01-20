// OJ LINK - https://oj.masaischool.com/contest/2503/problem/02
//Correct


var a = "10 22 9 33 21 50 41 60 80";
var arr = a.trim().split(" ").map(Number);
var n = arr.length;
var dp = new Array(n).fill(1);

function LIS(n, arr, dp){

    for(var i = 1; i < n; i++){
        for(var j = i - 1; j >= 0; j--){
            if(arr[i] > arr[j]){
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }
    var max = Math.max();
    for(var i = 0; i < n; i++){
        if(dp[i] > max){
            max = dp[i];
        }
    }
    return max;
}

console.log(n, arr, dp);
console.log(LIS(n, arr, dp));
console.log(dp);