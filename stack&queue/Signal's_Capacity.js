// OJ Link - https://oj.masaischool.com/contest/2237/problem/5

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t = +input[0].trim();

  var line = 1;
  for (var i = 0; i < t; i++) {
    var n = +input[line].trim();
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    find(n, arr);
  }
}

function find(n, arr) {
  var stack = [];
  var res = [];
  for (var i = 0; i < n; i++) {
    while (arr[stack[stack.length - 1]] < arr[i]) {
      stack.pop();
    }

    if (stack.length == 0) {
      stack.push(i);
      res.push(i + 1);
    } else {
      res.push(i - stack[stack.length - 1]);
      stack.push(i);
    }
  }
  console.log(res.join(" "));
}

if (process.env.USER === "bhaskar") {
  runProgram(`2
  7
  100 80 60 70 60 75 85
  5
  3 5 0 9 8`);
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
