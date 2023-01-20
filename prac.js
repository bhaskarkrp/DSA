let p = 9;

let dp = new Array(p + 1);

function change(p, i, coin, dp) {
  if (dp[p] != undefined) {
    return dp[p];
  }

  if (p === 0) {
    return coin;
  }

  if (p < factorial(i)) {
    return Math.min();
  }

  return (dp[p] = Math.min(
    change(p - factorial(i), i, coin + 1),
    change(p, i + 1, coin)
  ));
}

console.log(factorial(2));

function factorial(n) {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}
