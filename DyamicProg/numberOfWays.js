// OJ LINK - https://oj.masaischool.com/contest/2491/problem/02
// Correct

var n = 4;

var dp = new Array(n+1).fill(-1);
dp[1] = 1; //
dp[2] = 2; 
dp[3] = 4;
// console.log(dp)
function canRunStairs(n, dp){

    if(dp[n] !== -1){
        return dp[n];
    }

    return dp[n] = canRunStairs(n - 1, dp) + canRunStairs(n - 2, dp) + canRunStairs(n - 3, dp);

}
// 
console.log(canRunStairs(n, dp));