//Tripplet sum - Done

let arr = [1, 5, 4, 7, 5, 9, 3];

arr.sort((a, b) => a - b);

let n = arr.length;
let sum = 10;
let flag = false;
for (let i = 0; i < arr.length - 2; i++) {
  let [l, r] = [i + 1, n - 1];
  if (!flag) {
    while (l < r) {
      if (arr[i] + arr[l] + arr[r] === sum) {
        console.log([arr[i], arr[l], arr[r]]);
        flag = true;
        break;
      } else if (arr[i] + arr[l] + arr[r] > sum) {
        r--;
      } else {
        l++;
      }
    }
  }
}

if (!flag) {
  console.log("Not Found");
}
