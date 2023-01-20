// OJ Link - https://oj.masaischool.com/contest/2208/problem/01

class Stack{
    constructor(){
        this.array = [];
        this.size = 0;
    }
    push_(elem){
        this.array[this.size] = elem;
        this.size++;
        console.log(this.size)
    }
    pop_(){
        this.size--;
        console.log(this.size)
    }
    top_(){
        if(this.size == 0){
            return "Empty!";
        }
        return this.array[this.size-1];
    }
    print(){
        while(this.size > 0){
            console.log(this.array[this.size-1]);
            this.size--;
        }
    }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var stack = new Stack();
  for(var i = 1; i <= n; i++){
    
    var arr = input[i].trim().split(" ").map(Number);
    if(arr[0] == 1){
        stack.push_(arr[1]);
        stack.print();
    }else if(arr[0] == 2){
        stack.pop_();
        stack.print();
    }else if(arr[0] == 3){
        // console.log(stack.top_());
    }
  }
}
if (process.env.USER === "bhaskar") {
  runProgram(`6
  1 15
  1 20
  2
  3
  2
  3`);
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