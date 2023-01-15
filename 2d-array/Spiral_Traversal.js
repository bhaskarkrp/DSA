// OJ Link - https://oj.masaischool.com/contest/2042/problem/02

var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
var n = 3;
var m = 4;

var top = 0;
var left = 0;
var right = m - 1;
var bottom = n - 1;
var drc = "bottom";
var ans = "";

while (left <= right && top <= right) {
  if (drc == "bottom") {
    for (var i = top; i <= bottom; i++) {
      ans += arr[i][left] + " ";
    }
    drc = "right";
    left++;
  } else if (drc == "right") {
    for (i = left; i <= right; i++) {
      ans += arr[bottom][i] + " ";
    }
    drc = "up";
    bottom--;
  } else if (drc == "up") {
    for (i = bottom; i >= top; i--) {
      ans += arr[i][right] + " ";
    }
    drc = "left";
    right--;
  } else if (drc == "left") {
    for (i = right; i >= left; i--) {
      ans += arr[top][i] + " ";
    }
    drc = "bottom";
    top++;
  }
}
console.log(ans);
