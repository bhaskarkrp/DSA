// OJ LINK- https://oj.masaischool.com/contest/2554/problem/02
// Correct

var a = "8 15 3 7";
var arr = a.trim().split(" ").map(Number);
var n = arr.length;

var dp = new Array(n);
for(var i = 0; i < n; i++){
    dp[i] = new Array(n);
}

function maxScore(n, arr, sta, end, dp) {

    if(dp[sta][end] !== undefined){
        return dp[sta][end];
    }

    if(sta === end){
        return dp[sta][end] = arr[sta];
    }

    if(sta + 1 == end){
        return dp[sta][end] = Math.max(arr[sta], arr[end]);
    }

    return dp[sta][end] = Math.max((arr[sta] + Math.min(maxScore(n, arr, sta+1, end-1, dp), maxScore(n, arr, sta+2, end, dp)), 
                    (arr[end] + Math.min(maxScore(n, arr, sta, end-2, dp), maxScore(n, arr, sta+1, end-1, dp))))); 

};

console.log(maxScore(n, arr, 0, n-1, dp));
console.log(dp);