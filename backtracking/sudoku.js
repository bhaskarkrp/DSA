// OJ Link - https://oj.masaischool.com/contest/2333/problem/03

var ans;
var flag = false;

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var arr = [];
  for (var i = 0; i < input.length; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
  }
  //   console.log(arr);
  sudoku(9, arr, 0, 0);
  if (flag) {
    for (var i = 0; i < ans.length; i++) {
      console.log(ans[i].join(" "));
    }
  } else {
    console.log("Not Possible");
  }
}

function sudoku(n, arr, row, col) {
  if (row == n) {
    // console.log(arr);
    ans = arr;
    flag = true;
    return arr;
  }

  var next_row = 0;
  var next_col = 0;
  if (col == 8) {
    next_row = row + 1;
  } else {
    next_row = row;
    next_col = col + 1;
  }

  if (arr[row][col] !== 0) {
    return sudoku(n, arr, next_row, next_col);
  }

  for (var i = 1; i <= 9; i++) {
    if (check(arr, row, col, i)) {
      arr[row][col] = i;

      if (sudoku(n, arr, next_row, next_col)) return true;
    }
    arr[row][col] = 0;
  }

  return false;
}

function check(arr, row, col, val) {
  //Rowwise && Coloumnwise check
  for (var i = 0; i < 9; i++) {
    if (arr[row][i] == val) {
      return false;
    }
    if (arr[i][col] == val) {
      return false;
    }
  }

  //3*3 grid check
  var r = Math.floor(row / 3) * 3;
  var c = Math.floor(col / 3) * 3;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (arr[i + r][j + c] == val) {
        return false;
      }
    }
  }

  return true;
}

if (process.env.USER === "bhaskar") {
  runProgram(`0 4 0 0 0 0 1 7 9 
  0 0 2 0 0 8 0 5 4 
  0 0 6 0 0 5 0 0 8 
  0 8 0 0 7 0 9 1 0 
  0 5 0 0 9 0 0 3 0 
  0 1 9 0 6 0 0 4 0 
  3 0 0 4 0 0 7 0 0 
  5 7 0 1 0 0 2 0 0 
  9 2 8 0 0 0 0 6 0`);
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
