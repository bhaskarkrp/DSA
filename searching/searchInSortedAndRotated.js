var arr = [3, 4, 5, 1, 2];
var target = 1;

var mini = min(arr);
// console.log(mini);
if(target >= arr[mini] && target <= arr[arr.length-1]){
    console.log(binarySearch(arr, target, mini, arr.length-1));
}else{
    console.log(binarySearch(arr, target, 0, mini-1))
}

function min(arr) {
    var low = 0;
    var high = arr.length-1;

    while(low <= high){
        var mid = low + Math.floor((high - low) / 2);

        if(arr[mid] > arr[high]){
            low = mid + 1;
        }else if(arr[mid] < arr[high]){
            high = mid;
        }else{
            high--;
        }
    }
    return low;
}

function binarySearch(arr, target, low, high) {
    
    while(low <= high){
        var mid = low + Math.floor((high - low) / 2);

        if(arr[mid] == target){
            return mid;
        }
        if(arr[mid] > target){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return -1;
} 