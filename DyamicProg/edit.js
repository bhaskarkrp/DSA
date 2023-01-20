// OJ LINK = https://oj.masaischool.com/contest/2581/problem/01
// Correct
var a = "abcde";
var b = "abxde";

var dp = new Array(a.length+1);
for(var i = 0; i <= a.length; i++){
    dp[i] = new Array(b.length+1);
};
// console.log(dp)

function edit(a, b, i, j, dp) {

    if(dp[i][j] !== undefined){
        return dp[i][j];
    }

    if(i == a.length){
        return dp[i][j] = b.length - j;
    }

    if(j == b.length){
        return dp[i][j] = a.length - i;
    }

    if(a[i] == b[j]){
        return dp[i][j] = edit(a, b, i+1, j+1, dp);
    }else{
        return dp[i][j] = 1 + Math.min(edit(a, b, i+1, j, dp), edit(a, b, i+1, j+1, dp), edit(a, b, i, j+1, dp));
    }

};

console.log(edit(a, b, 0, 0, dp));
console.log(dp)