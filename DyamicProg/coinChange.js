// OJ LINK - https://oj.masaischool.com/contest/2503/problem/04
// Correct

var a = "2 3 6 7";

var arr = a.trim().split(" ").map(Number);
var n = arr.length;
var m = 7;

var dp = new Array(m + 1);
for (var i = 0; i <= m; i++) {
  dp[i] = new Array(n);
}

function coinChange(n, m, arr, i, dp) {
  if (dp[m][i] !== undefined) {
    return dp[m][i];
  }

  if (i == n) {
    return 0;
  }

  if (m == 0) {
    return 1;
  }

  if (arr[i] > m) {
    return (dp[m][i] = coinChange(n, m, arr, i + 1, dp));
  } else {
    return (dp[m][i] =
      coinChange(n, m - arr[i], arr, i, dp) + coinChange(n, m, arr, i + 1, dp));
  }
}

console.log(dp);
console.log(coinChange(n, m, arr, 0, dp));
console.log(dp);
