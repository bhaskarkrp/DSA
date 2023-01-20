// OJ Link - https://oj.masaischool.com/contest/2313/problem/06

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t = +input[0].trim();
  var line = 1;

  for(var i = 0; i < t; i++){
    var n = +input[line].trim();
    line++;
    var str = input[line].trim();
    line++;
    console.log(findMid(0, n-1, str));
    // console.log(n, str);
  }
}

function findMid(start, end, str) {

    if(start > end) return "";

    if(start == end) return str[start];

    var mid = Math.floor((start + end) / 2);

    return str[mid] + findMid(start, mid-1, str) + findMid(mid+1, end, str);
}


if (process.env.USER === "bhaskar") {
  runProgram(`3
  3
  abc
  4
  abcd
  11
  abcdefghijk`);
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