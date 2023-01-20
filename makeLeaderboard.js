function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var N = input[0];
       var arrName = [];
       var arrMarks = [];
      for(var i = 1; i <= N; i++){
          var a = input[i].trim().split(" ");
          arrName.push(a[0]);
          arrMarks.push(+a[1]);
      }
      // console.log(arrName, arrMarks);
      findRank(N, arrName, arrMarks);
  }
  
  function findRank(N, arrName, arrMarks){
      var alpha = "abcdefghijklmnopqrstuvwxyz";
      var marks = arrMarks;
      for(var i = 0; i < N; i++){
          for(var j = i+1; j < N; j++){
              if(marks[j] < marks[i]){
                  [marks[j], marks[i]] = [marks[i], marks[j]];
                  [arrName[j], arrName[i]] = [arrName[i], arrName[j]];
              }
          }
      }
      marks.reverse();
      arrName.reverse();

    //   console.log(marks, arrName);
  
    //   var map = new Map();
      var arr = [];
      var rank = 1;

    for(var i = 0; i < N; i++){
        // rank = rank + count;
        var count = 0;
        if(marks[i] == marks[i+1]){
            arr.push(arrName[i]);
        }else{
            arr.push(arrName[i]);
            arr.sort();
            // console.log(arr);
            for(var j = 0; j < arr.length; j++){
                // map.set(arr[j], rank);
                console.log(arr[j], rank);
                count++;
            }
            // console.log(count, rank);
            rank = rank + count;
            arr = [];
        }
    }

  }
  
  
  if (process.env.USER === "bhaskar") {
    runProgram(`9
    aa 43
    ab 45
    ad 43
    af 42
    gh 42
    gk 49
    af 89
    zz 89
    ma 35`);
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