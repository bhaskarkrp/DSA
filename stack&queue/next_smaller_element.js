// var arr = [4, 8, 5, 2, 25];
var arr = [13, 7, 6, 12];

var stack = [];
var res = [];
for(var i = 0; i < arr.length; i++) {
    if(stack.length == 0) {
        stack.push(i);
    }else{
        if(arr[stack[stack.length - 1]] < arr[i]){
            stack.push(i);
        }else{
            while(arr[stack[stack.length - 1]] > arr[i]){
                res[stack[stack.length - 1]] = arr[i];
                stack.pop();
            }
            stack.push(i);
        }
    }
}
while(stack.length > 0){
    res[stack[stack.length -1]] = -1;
    stack.pop();
}
console.log(res.join(" "));