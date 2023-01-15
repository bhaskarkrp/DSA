// OJ Link - https://oj.masaischool.com/contest/2089/problem/02

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t = +input[0];
  var line = 1;

  for(var i = 0; i < t; i++) {
    var n = +input[line].trim();
    line++;
    var arr = [];
    for(var j = 0; j < n; j++) {
        var arr1 = input[line].trim().split(" ").map(Number);
        arr.push(arr1);
        line++;
    }
    // console.log(n, arr);
    rotate(n, arr);
  }
}

function rotate(n, arr) {
    for(var i = n-1; i >= 0; i--) {
        var arr1 = [];
        for(var j = 0; j < n; j++){
            arr1.push(arr[i][j]);
        }
        console.log(arr1.reverse().join(" "));
    }
}


if (process.env.USER === "bhaskar") {
  runProgram(`2
  3 
  1 2 3
  4 5 6
  7 8 9
  4
  1 2 3 4
  5 6 7 8
  9 0 1 2
  3 4 5 6`);
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