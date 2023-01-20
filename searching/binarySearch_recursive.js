var arr = [1, 5, 6, 7, 8, 9, 5, 3];

arr.sort(function(a, b){
    return a-b;
});

console.log(recursiveSearch(arr, 6, 0, arr.length-1));

function recursiveSearch(arr, target, low, high) {

    var mid = low + Math.floor((high - low) / 2);

    if(arr[mid] == target){
        return mid;
    }

    if(arr[mid] > target){
        recursiveSearch(arr, target, low, mid - 1);
    }else{
        recursiveSearch(arr, target, mid + 1, high);
    }

    return "Not Found";
}