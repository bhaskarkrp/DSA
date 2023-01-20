// OJ LINK - https://oj.masaischool.com/contest/2526/problem/06
//Correct

var a = "17 13 19 5 7 5 9 2 17 18 18 9 12 9 8 19 24 22 6 20 13 8 24 12 25 9 12 10 21 19 5 23 9 4 23 16 25 9 1 3 15 22 24 12 5 19 2 9 20 13";
// var a = "1 3 5 8 9 2 6 7 6 8 9"
var arr = a.trim().split(" ").map(Number);
var n = arr.length;
var dp = new Array(n);
dp[0] = 0;

function trampoline(n, arr, i, dp) {

    for(var i = 1; i < n; i++) {
        dp[i] = Math.min();
        for(var j = i - 1; j >= 0; j--) {
            if(i <= j + arr[j]) {
                dp[i] = Math.min(dp[i], 1 + dp[j]);
            }
        }
    }

    return dp[n-1];
    
}

console.log(trampoline(n, arr, 0, dp))