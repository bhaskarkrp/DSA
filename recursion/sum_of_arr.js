// OJ LINK - https://oj.masaischool.com/contest/2297/problem/03

function runProgram(input) {
  // Write code here
    input = input.trim().split("\n");
    var t = +input[0].trim();
    var line = 1;
    for(var i = 0; i < t; i++) {
        var n = +input[line].trim();
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        var sum = 0;
        console.log(find_sum(n, arr, sum, 0));
        // console.log(t, n, arr);
    }
}

function find_sum(n, arr, sum, i){
    // var i = 0;
    // var sum = 0;
    if(i == n-1){
        return sum;
    }
    var diff = arr[i] - arr[i+1];
    if(diff < 0)
        diff = diff * (-1);
    sum += diff;
    // return i++
    // i++;
    return find_sum(n, arr, sum, ++i);
}


if (process.env.USER === "bhaskar") {
  runProgram(`2
  3
  1 5 2
  5
  3 5 6 1 8`);
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