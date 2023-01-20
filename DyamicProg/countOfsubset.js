// Count of Subset With given sum
//Correct

var arr = [2, 3, 5, 6, 8, 10, 2];
var sum = 5;

var dp = new Array(sum+1);
for(var i = 0; i <= sum; i++){
    dp[i] = new Array(arr.length);
}

function count(sum, arr, dp, i){

    if(dp[sum][i] !== undefined){
        return dp[sum][i];
    }

    if(sum == 0){
        dp[sum][i] = 1;
        return dp[sum][i];
    }

    if(i == arr.length){
        dp[sum][i] = 0;
        return dp[sum][i];
    }

    if(arr[i] <= sum){
        return dp[sum][i] = count(sum - arr[i], arr, dp, i+1) + count(sum, arr, dp, i+1);
    }else{
        return dp[sum][i] = count(sum, arr, dp, i+1);
    }

}

console.log(count(sum, arr, dp, 0));
console.log(dp[sum][0]);
console.log(dp)