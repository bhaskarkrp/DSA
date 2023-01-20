// OJ Link - https://oj.masaischool.com/contest/2313/problem/03

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");

  var t = +input[0].trim();
  for(var i = 1; i <= t; i++){
      if(find(+input[i], 1))
        console.log("Yes");
    else
        console.log("No");
  }
}

function find(n, i) {
    
    if(n == i) return true;

    if(n < i) return false;

    return find(n, i*10) || find(n, i*20);
}


if (process.env.USER === "bhaskar") {
  runProgram(`5
  1
  2
  10
  25
  200`);
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