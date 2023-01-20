// LEET CODE LINK - https://leetcode.com/problems/basic-calculator-ii/

// var s = "3+22*2";
var s = " 3 / 2 "
s = s.trim();
var arr = [];
var a = "";
for (var i = 0; i < s.length; i++) {
    if (s[i] == '+' || s[i] == '-' || s[i] == '*' || s[i] == '/') {
        arr.push(+a);
        a = "";
        arr.push(s[i]);
    } else if (s[i] == " ") {
        // i++;
    } else {
        a += s[i];
    }

    if (i == s.length - 1) {
        arr.push(+a);
    }
};

console.log(arr);
var stack = [];
for (i = 0; i < arr.length; i++) {
    if (arr[i] == '+') {
        stack.push("+");
    } else if (arr[i] == "-") {
        stack.push("-");
    } else if (arr[i] == "*") {
        stack.push(stack.pop() * arr[i + 1]);
        i++;
    } else if (arr[i] == "/") {
        stack.push(Math.floor(stack.pop() / arr[i + 1]));
        i++;
    } else {
        stack.push(arr[i]);
    }
}

console.log(stack);
if (stack.length == 1) {
    return stack[0];
} else {
    var sum = stack[0];
    for (i = 1; i < stack.length - 1; i = i + 2) {
        if (stack[i] == "+") {
            sum += stack[i + 1];
        } else if (stack[i] == "-") {
            sum -= stack[i + 1];
        }
    }
}
console.log(sum);