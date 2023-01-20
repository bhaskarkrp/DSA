// OJ Link - https://oj.masaischool.com/contest/2333/problem/02

function runProgram(input) {
  // Write code here
  input = input.trim().split('\n');
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);

  permutation(n, arr, 0);
  ans.sort();
  for(var i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
}

var ans = [];

function permutation(n, arr, curr) {
    if(n == curr){
        // console.log(arr);
        ans.push(arr.join(" "));
        return;
    }

    for(var i = curr; i < n; i++) {
        [arr[i], arr[curr]] = [arr[curr], arr[i]];
        permutation(n, arr, curr+1);
        [arr[i], arr[curr]] = [arr[curr], arr[i]];
    }

}

if (process.env.USER === "bhaskar") {
  runProgram(`3
  1 2 3`);
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