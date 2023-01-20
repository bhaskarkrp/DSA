// OJ LINK - https://oj.masaischool.com/contest/2526/problem/05
//Correct

var [h, w] = [6, 5];
var arr = [[3, 1, 7, 4, 2],
            [2, 1, 3, 1, 1],
            [1, 2, 2, 1, 8],
            [2, 2, 1, 5, 3],
            [2, 1, 4, 4, 4],
            [5, 2, 7, 5, 1]];

var dp = new Array(h);
for(var i = 0; i < h; i++) {
    dp[i] = new Array(w);
};
for(i = 0; i < w; i++) {
    dp[0][i] = arr[0][i];
}


function springboard(h, w, arr, dp){

    for(var i = 1; i < h; i++) {
        for(var j = 0; j < w; j++) {
            if(j == 0){
                dp[i][j] = arr[i][j] + Math.max(dp[i-1][j], dp[i-1][j+1]);
            }else if(j == w-1){
                dp[i][j] = arr[i][j] + Math.max(dp[i-1][j], dp[i-1][j-1]);
            }else{
                dp[i][j] = arr[i][j] + Math.max(dp[i-1][j], dp[i-1][j-1], dp[i-1][j+1]);
            }
        }
    }

    // return dp;
    var max = Math.max();
    for(i = 0; i < w; i++) {
        if(max < dp[h-1][i]){
            max = dp[h-1][i];
        }
    }
    return max;
}

// console.log(dp);
console.log(springboard(h, w, arr, dp));