// OJ LINK - https://oj.masaischool.com/contest/3312/problem/05
// Correct

function runProgram(input) {
  // Write code here
  let a = input.trim();
  let b = a.split("").reverse().join("");
  let dp = new Array(a.length + 1);
  //   console.log(a, b);
  for (let i = 0; i < a.length + 1; i++) {
    dp[i] = new Array(a.length + 1);
  }
  //   console.log(dp);
  lCsubseq(a, b, 0, 0, dp);
  console.log(dp[0][0]);
}

function lCsubseq(a, b, i, j, dp) {
  //   console.log(i, j);
  if (dp[i][j] != undefined) {
    return dp[i][j];
  }

  if (i == a.length || j == b.length) {
    return 0;
  }

  if (a[i] == b[j]) {
    return (dp[i][j] = 1 + lCsubseq(a, b, i + 1, j + 1, dp));
  } else {
    return (dp[i][j] = Math.max(
      lCsubseq(a, b, i + 1, j, dp),
      lCsubseq(a, b, i, j + 1, dp)
    ));
  }
}

if (process.env.USER === "bhaskar") {
  runProgram(`AABCDEBAZ`);
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
