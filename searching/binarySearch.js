var arr = [1, 5, 6, 8, 44, 12];

arr.sort(function (a, b) {
  return a - b;
});
// console.log(arr)
console.log(binarySearch(arr, 7));

function binarySearch(arr, target) {
  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {
    var mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    }
  }
  return "Not Found";
}
