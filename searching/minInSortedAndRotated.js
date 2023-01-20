// OJ LINK - https://oj.masaischool.com/contest/2418/problem/02

var arr = [4, 6, 7, 9, 10, -1, 0, 1, 2, 3];

function min(arr) {
    var low = 0;
    var high = arr.length - 1;

    while(low <= high) {
        var mid = low + Math.floor((high - low) / 2);

        if(arr[mid] > arr[high]) {
            low = mid + 1;
        }else if(arr[mid] < arr[low]) {
            high = mid;
        }else{
            high--;
        }
    }
    return low;

}

console.log(min(arr));