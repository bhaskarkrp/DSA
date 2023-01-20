let arr = [0, 1, 2, 1, 0, 1, 1, 2, 0, 1, 2];

function moveZeroOneTwo(n, arr) {
  let [l, mid, r] = [0, 0, n - 1];

  while (mid <= r) {
    if (arr[mid] === 0) {
      [arr[mid], arr[l]] = [arr[l], arr[mid]];
      mid++;
      l++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[r]] = [arr[r], arr[mid]];
      r--;
    }
  }

  console.log(arr);
}

moveZeroOneTwo(arr.length, arr);
