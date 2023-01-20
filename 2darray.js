function runProgram(input){
    input = input.trim().split("\n");
    var [N, M] = input[0].trim().split(" ").map(Number);
    
    var arr = [];
    for(var i = 1; i <= N; i++){
        arr.push(input[i].trim().split(" ").map(Number));
        console.log(arr[i-1].join(" "));
    }
}

if (process.env.USER === "bhaskar") {
  runProgram(`3 2
1 2
3 4
5 6`);
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