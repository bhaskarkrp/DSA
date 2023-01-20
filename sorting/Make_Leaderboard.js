// OJ Link - https://oj.masaischool.com/contest/2074/problem/01

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var N = input[0];
  var arrMarks = [];
  var arrNames = [];
  for(var i = 0; i < N; i++) {
    var arr = input[i+1].trim().split(" ");
    arrNames.push(arr[0]);
    arrMarks.push(+arr[1]);
  }
//   console.log(N, arrNames, arrMarks);
  find(N, arrNames, arrMarks);
}

function find(N, arrNames, arrMarks) {
    
    for(var i=0; i< N; i++) {
        for(var j = 0; j < N-1-i; j++) {
            if(arrMarks[j] > arrMarks[j+1]) {
                [arrNames[j], arrNames[j+1]] = [arrNames[j+1], arrNames[j]];
                [arrMarks[j], arrMarks[j+1]] = [arrMarks[j+1], arrMarks[j]];
            }
        }
    }
    arrMarks.reverse();
    arrNames.reverse();
    // console.log(arrMarks, arrNames);
    
    var map = new Map();

        var arr = [];
        var rank = 1;
        
        for(j = 0; j < N; j++){            
            var count = 0;
            if(arrMarks[j] == arrMarks[j+1]){
                arr.push(arrNames[j]);
            }else{
                count = 0;
                arr.push(arrNames[j]);
                arr.sort();
                for(i = 0; i < arr.length; i++){
                    map.set(arr[i], rank);
                    count++;
                }
                rank += count;
                arr = [];
            }
        }
        // console.log(map);
        for(var key of map.keys()){
            console.log(map.get(key), key);
        }

}



if (process.env.USER === "bhaskar") {
  runProgram(`6
  rancho 45
  chatur 32
  raju 30
  farhan 28
  virus 32
  joy 45`);
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