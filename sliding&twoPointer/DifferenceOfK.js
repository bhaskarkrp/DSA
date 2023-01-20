var arr = [1, 2, 3, 4, 5];
var k = 3;

console.log(diff(arr,k));

function diff(arr, k) {
    var i = 0;
    var j = 1;

    arr.sort(function(a, b) {
        return a - b;
    });
    // console.log(arr);
    while(i < arr.length && j < arr.length) {
        if(arr[j] - arr[i] > 0){
            i++;
        }else if(arr[j] - arr[i] < 0){
            j++;
        }else{
            return true;
        }
    }
    return false;
}