// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var arr = [0, 1, 0, 3, 12];
// var arr = [1, 0];
var n = arr.length;

var l = 0;
var r = 0;

while (l < n && r < n) {
  if (arr[r] === 0) {
    r++;
  } else {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r++;
  }
}

console.log(arr);
