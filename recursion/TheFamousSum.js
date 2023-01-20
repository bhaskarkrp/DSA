// Oj Link - https://oj.masaischool.com/contest/2313/problem/05

function runProgram(input) {
  // Write code here
  [n, k] = input.trim().split(' ');
    // var sum = (n - 1) % 9 + 1;
    var sum = 0;
    for(var i = 0; i < n.length; i++) {
      sum += +n[i];
      // console.log(sum);
    }
    console.log(sum*k);
    // console.log(n, sum*(+k));
    console.log(find(sum*k));
}

function find(sum) {
    if(sum < 10) return sum;
    // var a = 0;
    // while(sum > 0) {
    //     a += sum % 10;
    //     sum = (sum-(sum % 10)) / 10;
    // }
    return find((sum - 1) % 9 + 1);
}

if (process.env.USER === "bhaskar") {
  runProgram(`346630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736 100000`);
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