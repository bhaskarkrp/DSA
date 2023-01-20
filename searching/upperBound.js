var arr = [0, 2, 4, 4, 5, 5, 7, 7, 9, 10];

console.log(upperBound(arr, 4));

function upperBound(arr, target) {

    var low = 0;
    var high = arr.length-1;
    var ans = -1;
    while(low <= high) {
        var mid = low + Math.floor((high - low) / 2);

        if(arr[mid] > target){
            ans = mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return ans;
}