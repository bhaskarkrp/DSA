// OJ LINK - https://oj.masaischool.com/contest/2554/problem/
// Correct
var arr = [[1, 50, 50],
            [50, 50, 50],
            [1, 50 ,50]];
var n = arr.length;
var dp = new Array(n);
for(var i = 0; i < n; i++){
    dp[i] = new Array(3);
    dp[0][i] = arr[0][i];
}

function minSpent(n, arr, dp) {

    for(var i = 1; i < n; i++) {
        dp[i][0] = arr[i][0] + Math.min(dp[i-1][1], dp[i-1][2]);
        dp[i][1] = arr[i][1] + Math.min(dp[i-1][0], dp[i-1][2]);
        dp[i][2] = arr[i][2] + Math.min(dp[i-1][0], dp[i-1][1]);
    }

    console.log(Math.min(dp[n-1][0], dp[n-1][1], dp[n-1][2]));
    console.log(dp);
}

minSpent(n, arr, dp);