// Statement - You are given an array of integers of length N, where N is even.
// You need to split the array into two parts of equal size in such a way that the difference
// between the sums of the parts is maximised.The sum of a part is defined as the sum of the elements it contains.
// Note that each element of the original array must be in exactly one of the parts.
// Print the maximum possible difference.

// console.log(10000 / 2)

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  var dp = new Array(n + 1);
  for (var i = 0; i <= n; i++) {
    dp[i] = new Array(n / 2 + 1);
  }
  solve(n, arr, dp, 0, 0);
  console.log(dp);
  var sum = 0;
  for (i = 0; i < n; i++) {
    sum += arr[i];
  }
  console.log(dp[0][0] - (sum - dp[0][0]));
}

function solve(n, arr, dp, curr, index) {
  if (dp[index][curr] !== undefined) {
    return dp[index][curr];
  }

  if (curr == n / 2 || index == n) {
    return 0;
  }

  return (dp[index][curr] = Math.max(
    arr[index] + solve(n, arr, dp, curr + 1, index + 1),
    solve(n, arr, dp, curr, index + 1)
  ));

  // return Math.max(arr[index] + solve(n, arr, dp, curr + 1, index + 1), solve(n, arr, dp, curr, index + 1));
}

if (process.env.USER === "bhaskar") {
  runProgram(`4
    3 5 1 4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

// ................................................................
