// OJ Link - https://oj.masaischool.com/contest/2237/problem/7

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
        if(this.size == 0){
            return -1;
        }
        return this.arr[this.size - 1];
    }
    isEmpty(){
        if(this.size == 0){
            return true;
        }
        return false;
    }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
//   console.log(n , arr);
  find(n, arr);
}

function find(n, arr) {
    var stack = new Stack();
    var res = [];

    for(var i = 0; i < n; i++) {
        if(stack.isEmpty()) {
            stack.push_(i);
        }else{
            if(arr[stack.top_()] > arr[i]) {
                stack.push_(i);
            }else{
                while(arr[stack.top_()] < arr[i]){
                    res[stack.top_()] = 0;
                    stack.pop_();
                }
                stack.push_(i);
            }
        }
    }
    // console.log(stack);
    while(!stack.isEmpty()){
        res[stack.top_()] = arr[stack.top_()];
        stack.pop_();
    }

    var ans = "";
    for(i = 0; i < res.length; i++){
        if(res[i] != 0){
            ans += res[i] + " ";
        }
    }
    console.log(ans);
}

if (process.env.USER === "bhaskar") {
  runProgram(`6
  16 17 4 3 5 2`);
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