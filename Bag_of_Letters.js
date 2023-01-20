// OJ Link - https://oj.masaischool.com/contest/2089/problem/03

var n = 5;
var nstr = "aabbc";
var m = 4;
var mstr = "abcd";

var arr = [];

for(var i = 0; i < n; i++) {
    arr.push(arr[i]);
}
var isTrue = true;
for(i = 0; i < m; i++) {
    if(isTrue) {
        for(var j = 0; j < n; j++) {
            if(mstr[i] == arr[j]) {
                isTrue = true;
                arr[j] = -1;
                break;
            }else{
                isTrue = false;
            }
        }
    }
}
if(isTrue == true) {
    console.log("Yes");
}else{
    console.log("No");
}