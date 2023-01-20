// Done

let arr = [-3, 4, 7, 9, 1, 2];

arr.sort((a, b) => a - b);

let minSum = Math.min();
let first, second;

let n = arr.length;

let [l, h] = [0, n - 1];

while (l < h) {
  let sum = arr[l] + arr[h];

  if (Math.abs(sum) < Math.abs(min)) {
    minSum = Math.abs(sum);
    first = arr[l];
    second = arr[h];
  }

  if (sum < 0) {
    l++;
  } else {
    h--;
  }
}

console.log(minSum, first, second);
