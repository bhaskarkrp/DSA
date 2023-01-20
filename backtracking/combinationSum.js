// LEET LINk - https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//  var combinationSum = function(candidates, target) {
    
//     solve(candidates, target, 0, 0, [], []);
// };
var res = [];
// solve([2,3,6,7], 7, 0, 0, []);
// console.log(res);
// var ans = [];
// for(var i = 0; i < res.length; i++) {
//     ans.push(res[i].split(",").map(Number));
// }
// console.log(ans);

function solve(arr, target, curr, sum, ans){
    
       
  if(sum == target){
      res.push(ans.join(" "));
      return;
  }
  
  if(sum > target){
      return;
  }
  
  for(var i = curr; i < arr.length; i++){
      ans.push(arr[i]);
      sum += arr[i];
      solve(arr, target, i, sum, ans);
      sum -= arr[i];
      ans.pop();
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t = +input[0].trim();
  var line = 1;
  // console.log(input, t);
  for(var i = 0; i < t; i++){
      var arr = input[line].trim().split(" ").map(Number);
      line++;
      var tar = +input[line].trim();
      line++;
    //   console.log(arr, tar);
      solve(arr, tar, 0, 0, []);
      // console.log(res)
      var ans = [];
        for(var j = 0; j < res.length; j++) {
            ans.push(res[j].split(" ").map(Number));
        }
        res = [];
        console.log(ans);
  }
}
if (process.env.USER === "bhaskar") {
  runProgram(`2
2 3 5
8
2 3 6 7 8
7`);
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