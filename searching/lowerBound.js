// OJ Link - https://oj.masaischool.com/contest/2395/problem/04

var arr = [1, 1, 2, 2, 5];

console.log(lowerBound(arr, 1));

function lowerBound(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  var ans = -1;
  while (low <= high) {
    var mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === target) {
      ans = mid;
      high = mid - 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    }
  }

  return ans;
}
