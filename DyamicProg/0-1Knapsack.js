// OJ LINK - https://oj.masaischool.com/contest/2554/problem/01
// Correct

var wt = [1, 2, 3, 2, 2];
var val = [8, 4, 0, 5, 3];
var cap = 4;
var n = val.length;
var dp = new Array(cap+1);
for(var i = 0; i <= cap; i++){
    dp[i] = new Array(n);
}

function knapSack(n, wt, val, cap, i, arr) {

    if(arr[cap][i] !== undefined){
        return arr[cap][i];
    }

    if(i == n || cap == 0){
        return 0;
    }

    if(wt[i] > cap) {
        return arr[cap][i] = knapSack(n, wt, val, cap, i+1, dp);
    }else{
        return arr[cap][i] = Math.max(val[i] + knapSack(n, wt, val, cap-wt[i], i+1, dp), knapSack(n, wt, val, cap, i+1, dp));
    }

};

console.log(knapSack(n, wt, val, cap, 0, dp));
console.log(dp);