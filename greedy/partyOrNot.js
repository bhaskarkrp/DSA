// OJ LINK - https://oj.masaischool.com/contest/2455/problem/01

var [n, c, r] = [5, 3, 24];
var arr = [6, 4, 21, 20, 13];

arr.sort(function(a, b) {
    return a - b;
});
var sum = 0;
for(var i = 0; i < c; i++) {
    sum += arr[i];
}

if(sum <= r){
    console.log("Party");
}else{
    console.log("Sad");
}
