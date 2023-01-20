let arr = [39, 27, 11, 4, 24, 32, 32, 1];
let n = arr.length;

let arr2 = smallLeft(n, arr);
console.log(arr2);

let arr3 = smallRight(n, arr).reverse();
console.log(arr3);

function smallRight(n, arr) {
  let stack = [];
  let ans = [];

  for (let i = n - 1; i >= 0; i--) {
    if (stack.length === 0) {
      ans.push(-1);
    } else {
      while (arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }

      if (stack.length === 0) {
        ans.push(-1);
      } else {
        ans.push(stack[stack.length - 1]);
      }
    }

    stack.push(i);
  }

  return ans;
}

function smallLeft(n, arr) {
  let stack = [];
  let ans = [];

  for (let i = 0; i < n; i++) {
    if (stack.length === 0) {
      ans.push(-1);
    } else {
      while (arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }

      if (stack.length === 0) {
        ans.push(-1);
      } else {
        ans.push(stack[stack.length - 1]);
      }
    }

    stack.push(i);
  }

  return ans;
}
