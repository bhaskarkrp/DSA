// Done

let arr = [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1];

// Move all zeros to the front

function moveToFront(n, arr) {
  let [l, r] = [0, n - 1];

  while (l < r) {
    while (arr[l] === 0 && l < r) {
      l++;
    }

    while (arr[r] === 1 && r > l) {
      r--;
    }

    if (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }

  console.log(arr);
}

moveToFront(arr.length, arr);

function moveToback(n, arr) {
  let [l, r] = [0, n - 1];

  while (l < r) {
    while (arr[l] === 1 && l < r) {
      l++;
    }

    while (arr[r] === 0 && l < r) {
      r--;
    }

    if (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }

  console.log(arr);
}

moveToback(arr.length, arr);
