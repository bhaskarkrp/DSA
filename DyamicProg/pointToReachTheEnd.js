// OK LINK - https://oj.masaischool.com/contest/2526/problem/03
// Correct

var a = "99991 99994 99997";
var b = "3 3 3";

var poi = a.trim().split(" ").map(Number);
var ene = b.trim().split(" ").map(Number);
var n = poi.length;
var dp = new Array(n);
dp.push(0);
poi.push(1e5);

function reachEnd(n, poi, ene, dp, ans){

    for(var i = n - 1; i >= 0; i--){
        var diff = poi[i+1] - poi[i];

        var e = ene[i] - diff;

        if(e < dp[i+1]){
            dp[i] = dp[i+1] - e;
        }else{
            dp[i] = 0;
            ans++; //
        }
    }
    console.log(dp);
    return ans;
};

console.log(reachEnd(n, poi, ene, dp, 0));