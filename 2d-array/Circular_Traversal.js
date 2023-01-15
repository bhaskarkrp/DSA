// Oj Link - https://oj.masaischool.com/contest/1963/problem/02

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var N = 3;

var top = 0;
var right = N - 1;
var left = N - 1;
var bottom = N - 1;
var ans = "";

for (var i = left; i >= top; i--) {
  ans += matrix[i][0] + " ";
}
top++;
for (i = top; i <= right; i++) {
  ans += matrix[0][i] + " ";
}
for (i = top; i <= bottom; i++) {
  ans += matrix[i][N - 1] + " ";
}
bottom--;
for (i = bottom; i >= top; i--) {
  ans += matrix[N - 1][i] + " ";
}
console.log(ans);
