// https://leetcode.com/problems/container-with-most-water/

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function areaWithMostWater(arr) {
  let [left, right] = [0, arr.length - 1];
  let max = Math.min();

  while (left < right) {
    let low = arr[left] > arr[high] ? arr[high] : arr[low];

    max = Math.max(max, low * (right - left));

    if (low === arr[left]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

console.log(areaWithMostWater(arr));
