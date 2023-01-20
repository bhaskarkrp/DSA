// OJ Link - https://oj.masaischool.com/contest/2237/problem/1

class Queue{
    constructor() {
        this.array = [];
        this.front = 0;
        this.back = 0;
    }
    enqueue(elem){
        this.array[this.back++] = elem;
        return this.back;
    }
    dequeue() {
        if(this.back == 0){
            return [-1, this.back].join(" ");
        }else{
            var front_element = this.array[this.front];
            for(var i = 0; i < this.back; i++){
                this.array[i] = this.array[i + 1];
            }
            this.back--;
        }
        return [front_element, this.back].join(" ");
    }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var queue = new Queue();
  for(var i = 1; i <= n; i++) {
    var arr = input[i].trim().split(" ");
    if(arr[0] == "E"){
        console.log(queue.enqueue(+arr[1]));
    }else if(arr[0] == "D"){
        console.log(queue.dequeue());
    }
  }
}
if (process.env.USER === "bhaskar") {
  runProgram(`5
  E 2
  D
  D
  E 3
  D`);
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