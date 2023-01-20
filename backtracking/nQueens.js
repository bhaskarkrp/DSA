// OJ Link = https://oj.masaischool.com/contest/2333/problem/05
var count = 0;
function runProgram(input) {
  // Write code here
  var n = +input.trim();
  var arr = new Array(n);
  for(var i = 0; i < n; i++){
      arr[i] = new Array(n);
  }
  for(var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
        arr[i][j] = 0;
    }
  }

//   console.log(arr);
  nQueens(n, arr, 0, 0);
  console.log(count)
}

function nQueens(n, arr, row, col) {
    if(row == n){
        console.log(arr);
        count++;
        return;
    }

    for(var i = 0; i < n; i++){
        if(check(n, arr, row, i)){
            arr[row][i] = 1;
            nQueens(n, arr, row+1, col);
            arr[row][i] = 0;
        }
    }
}

function check(n, arr, row, col){

    //Coloumnwise check
    for(var i = 0; i < row; i++){
        if(arr[i][col] == 1){
            return false;
        }
    }

    //Diagonally upper left check
    var j;
    for(i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--){
        if(arr[i][j] == 1){
            return false;
        }
    }
    //Diagonally upper right check
    for(i = row-1, j = col+1; i >= 0 && j < n; i--, j++){
        if(arr[i][j] == 1){
            return false;
        }
    }

    return true;
}


if (process.env.USER === "bhaskar") {
  runProgram(`6`);
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