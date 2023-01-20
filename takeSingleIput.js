function runProgram(input) {
  // Write code here
  input = Number(input);
//   console.log(input);
    EvenOdd(input);
}

function EvenOdd(input){
    if(input % 2 == 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}


if (process.env.USER === "bhaskar") {
  runProgram(`5`);
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

// console.log(process.env.USER);
// console.log("abc");