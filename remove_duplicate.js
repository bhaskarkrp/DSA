// var arr1 = [1,2,2,3,4,5]
var arr1 = [1,2,2,3,4];
var n = 5;
var arr2 = [1,2,3,4,5,5];
var m = 6;

var arr1D = removeDuplicate(n, arr1);
var arr2D = removeDuplicate(m, arr2);
// console.log(arr1D, arr2D);
var isTrue = true;
var max = (arr1D.length > arr2D.length)? arr1D.length : arr2D.length;
for(var i = 0; i < max; i++){
    if(arr1D[i] !== arr2D[i]){
        isTrue = false;
        break;
    }
}
if(isTrue) console.log("Yes");
else console.log("No");
function removeDuplicate(n, arr){
    var arr1 = [];
    for(var i = 0; i < n; i++) {
        if(arr[i] !== arr[i + 1]){
            arr1.push(arr[i]);
        }
    }
    // arr1.push(arr[i]);
    return arr1;
}
