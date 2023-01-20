// OJ Link - https://oj.masaischool.com/contest/2237/problem/6

class Stack{
    constructor(){
        this.arr = [];
        this.size = 0;
    }
    push_(elem){
        this.arr[this.size] = elem;
        this.size++;
    }
    pop_(){
        this.size--;
    }
    top_(){
        if(this.arr.length == 0){
            return -1;
        }
        return this.arr[this.arr.length - 1];
    }
}

class Queue{
    constructor(){
        this.arr = [];
        this.front = 0;
        this.back = 0;
    }
    enqueue(elem){
        this.arr[this.back] = elem;
        this.back++;
    }
    dequeue(){
        this.back--;
    }
    top_(){
        if(this.back == 0){
            return-1;
        }
        return this.arr[this.front];
    }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var stack = new Stack();
  var queue = new Queue();
  for(var i = 1;  i <= n; i++) {
    var arr = input[i].trim().split(" ").map(Number);
    if(arr[0] == 1){
        queue.enqueue(arr[1]);
    }else if(arr[0] == 2){
        stack.push_(arr[1]);
    }else if(arr[0] == 3){
        console.log(queue.top_());
    }else if(arr[0] == 4){
        console.log(stack.top_());
    }else if(arr[0] == 5){
        stack.push_(queue.top_());
        queue.dequeue();
    }
  }
}
if (process.env.USER === "bhaskar") {
  runProgram(`7
  1 4
  2 3
  1 2
  3
  4
  5
  4`);
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