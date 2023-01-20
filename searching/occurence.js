// OJ Link - https://oj.masaischool.com/contest/2395/problem/06

var arr = [2, 3, 3, 3, 6, 9];

console.log(upperBound(arr, 3) - lowerBound(arr, 3));

function lowerBound(arr, target) {
    var low = 0;
    var high = arr.length-1;

    while(low <= high) {
        var mid = low + Math.floor((high - low) / 2);

        if(arr[mid] == target) {
            ans = mid;
            high = mid - 1;
        }else if(arr[mid] > target) {
            high = mid -1;
        }else{
            low = mid + 1;
        }
    }
    
    return ans;
}

function upperBound(arr, target) {
    var low = 0;
    var high = arr.length-1;
    var ans = -1;
    while(low <= high){
        var mid = low + Math.floor((high - low) / 2);

        if(arr[mid] > target) {
            ans = mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return ans;
}