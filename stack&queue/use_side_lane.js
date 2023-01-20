function runProgram(input){
    input = input.trim().split("\n");
    var n = +input[0].trim();
    var arr = input[1].trim().split(" ").map(Number);
    
    console.log(find(n, arr));
}

function find(n, arr){
    var stack = [];
    var arr1 = [];
    for(var i = 0; i < n; i++){
        if(stack.length == 0){
            stack.push(arr[i]);
        }else{
            if(stack[stack.length - 1] > arr[i]){
                stack.push(arr[i]);
            }else{
                while(stack[stack.length - 1] < arr[i]){
                    arr1.push(stack[stack.length - 1]);
                    stack.pop();
                }
                stack.push(arr[i]);
            }
        }
    }
    while(stack.length > 0){
        arr1.push(stack[stack.length - 1]);
        stack.pop();
    }
    // console.log(arr1);
    var j = 1;
    for(i = 0; i < n; i++){
        if(arr1[i] == j){
            j++;
        }else{
            return "No";
        }
    }
    return "Yes";
}

if (process.env.USER === "bhaskar") {
  runProgram(`5
5 1 2 4 3 
0`);
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