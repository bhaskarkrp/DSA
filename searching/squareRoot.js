// OJ Link - https://oj.masaischool.com/contest/2410/problem/03

function squareRoot(n){
    var low = 0;
    var high = Math.floor(n / 2) - 1;
    ans = -1;
    while(low <= high){
        var mid = low + Math.floor((high - low) / 2);

        // if(mid * mid == n){
        //     return mid;
        // }

        if(mid * mid > n){
            high = mid - 1;
        }else{
            ans = mid;
            low = mid + 1;
        }
    }
    return ans;
}

console.log(squareRoot(100));