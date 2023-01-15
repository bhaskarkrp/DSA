// OJ Link - https://oj.masaischool.com/contest/2455/problem/05

function runProgram(input) {
  // Write code here
  input = input.trim().split('\n');
  var c = +input[0].trim();
  var n = +input[1].trim();
  var vArr = input[2].trim().split(" ").map(Number);
  var wArr = input[3].trim().split(" ").map(Number);
  var arr = [];
  for(var i = 0; i < n; i++) {
    var arr1 = [];
    arr1.push(vArr[i]);
    arr1.push(wArr[i]);
    arr1.push(vArr[i]/wArr[i]);

    arr.push(arr1);
  };

arr.sort(function(a, b){
    return b[2] - a[2];
});
//   console.log(arr);
    var ans = stealAsMuchAs(c, n, arr);
    var sum = 0;
    for(var i = 0; i < ans.length; i++){
        sum += ans[i];
    }
    console.log(sum);
}

function stealAsMuchAs(c, n, arr) {
    var ans = [];
    var sum = 0;
    for(var i = 0; i < n; i++) {
        sum += arr[i][1];

        if(sum > c){
            var val = (c - (sum - arr[i][1])) * arr[i][2];
            ans.push(val);
        }else{
            ans.push(arr[i][0]);
        }
    }

    return ans;
}

if (process.env.USER === "bhaskar") {
  runProgram(`50 
  3
  60 100 120 
  10 20 30`);
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