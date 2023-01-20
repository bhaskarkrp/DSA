// OJ Link - https://oj.masaischool.com/contest/2074/problem/03

var N = 5;
var arr = [4, 5, 3, 7, 1];

var arr2 = [];
for(var i = 0; i < N; i++){
    arr2.push(arr[i]);
}
arr.sort(function(a,b){
    return a-b;
});
// console.log(arr2, arr);
var ans = "";
for(i = 0; i < N; i++){
    for(var j = 0; j < N; j++){
        if(arr[i] == arr2[j]){
            ans += j + " ";
            arr2[j] = -1;
        }
    }
}
console.log(ans);
