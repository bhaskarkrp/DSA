//Correct

var arr = [4, 5, 7, 1, 3, 8, 2, 9];
// var arr = [2, 3, 5, 6, 8, 10];
var target = 10;


console.log(isSumExist(arr, target, 0));

function isSumExist(arr, target, i) {

    if(target === 0){
        return true;
    }

    if(i === arr.length){
        return false;
    }
    

    return isSumExist(arr, target-arr[i], i+1) || isSumExist(arr, target, i+1);
}