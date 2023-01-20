// Oj Link - https://oj.masaischool.com/contest/2083/problem/02

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t = +input[0];
  var line = 1;
  for(var i = 0; i < t; i++) {
      var [N, target] = input[line].trim().split(" ").map(Number);
      line++;
      var arr = input[line].trim().split(" ").map(Number);
      line++;
    //   console.log(N, target, arr);
    console.log(find(N, target, arr));
  }
}

function find(N, target, arr) {
    var l = 0;
    var r = N-1;
    while(l < r) {
        if(arr[l] + arr[r] < target){
            l++;
        }else if(arr[l] + arr[r] > target){
            r--;
        }else{
            return [l, r];
        }
    }
    return [-1,-1];
}


if (process.env.USER === "bhaskar") {
  runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`);
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