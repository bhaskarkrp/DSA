function runProgram(input){
    input = input.trim().split("\n");
    var tCases = input[0];
    var line = 1;
    
    for(var i = 0; i < tCases; i++){
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        arr = arr.sort();
        line++;
        var K = +input[line].trim();
        line++;
        // console.log(N, arr, K);
        console.log(lessPair(N, arr, K));
    }
}

function lessPair(N, arr, K){
    var left = 0;
    var right = N-1;
    var max = 0;
    console.log(arr);
    while(left < right){
        var S = arr[left] + arr[right];
        if(S < K){
            if(max < S){
                max = S;
            }else{
                left++;
            }
        }else if(S >= K){
            right--;
        }
    }
    if(max > 0){
        return max;
    }else{
        return -1;
    }
}

if (process.env.USER === "bhaskar") {
  runProgram(`2
5
1 2 3 4 5
7
7
3 2 1 4 1 2 6
9`);
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



