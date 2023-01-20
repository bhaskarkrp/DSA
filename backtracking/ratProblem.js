function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  
  var arr = [];
  for(var i = 0; i < input.length; i++) {
    arr.push(input[i].trim().split(",").map(Number));
  }

    rat(arr, arr.length, 0, 0);
      // console.log(ans);
}

function rat(arr, n, row, col){
    if(row == n-1 && col == n-1){
        arr[row][col] = 2;
        console.log(arr);
        return;
    }

    if(row > n-1 || col > n-1 || col < 0 || row < 0){
        return;
    }
    if(check(arr, n, row+1, col)){
        arr[row][col] = 2;
        rat(arr, n, row+1, col);
    }
    if(check(arr, n, row, col+1)){
        arr[row][col] = 2;
        rat(arr, n, row, col+1);
    }
    if(check(arr, n, row, col-1)){
        arr[row][col] = 2;
        rat(arr, n, row, col-1);
    }
    if(check(arr, n, row-1, col)){
      arr[row][col] = 2;
      rat(arr, n, row-1, col);
    }
    
    arr[row][col] = 0;

}

function check(arr, n, row, col){
    if(row > n-1 || row < 0 || col > n-1 || col < 0)
        return false;
    if(arr[row][col] == 1){
        return true;
    }
    return false;
}


if (process.env.USER === "bhaskar") {
  runProgram(`1, 0, 1, 1, 1
  1, 1, 1, 0, 1
  1, 0, 0, 1, 1
  1, 0, 0, 1, 0
  1, 0, 0, 1, 1`);
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