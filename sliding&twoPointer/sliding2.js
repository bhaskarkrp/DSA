//Find a subarray having the given sum in an integer array

var arr = [2, 6, 0, 9, 7, 3, 1, 4, 1, 10];
// var arr = [0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10];
// var arr = [0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10];
var target = -3;
// var target = 15;

console.log(find(arr, target));

// correct for only positive numbers\
function find(arr, t) {
  var l = 0;
  var sum = 0;

  for (let i = 0; i < arr.length; i++) {
    while (sum < target && l < arr.length) {
      sum += arr[l];
      l++;
    }

    if (sum === target) {
      return true;
    }
    sum -= arr[i];
  }
  return false;
}
//https://www.techiedelight.com/find-subarray-having-given-sum-given-array/
