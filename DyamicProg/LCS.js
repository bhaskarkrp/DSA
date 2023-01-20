// OJ LINK - https://oj.masaischool.com/contest/2491/problem/01
//Correct

var a = "AEDFHR";
var b = "ABCDGH";

var arr = new Array(a.length + 1);
for (var i = 0; i <= a.length; i++) {
  arr[i] = new Array(b.length + 1);
}

function LCS(a, b, i, j, arr) {
  if (arr[i][j] !== undefined) {
    return arr[i][j];
  }

  if (i == a.length || j == b.length) {
    return 0;
  }

  if (a[i] === b[j]) {
    return (arr[i][j] = 1 + LCS(a, b, i + 1, j + 1, arr));
  } else {
    return (arr[i][j] = Math.max(
      LCS(a, b, i + 1, j, arr),
      LCS(a, b, i, j + 1, arr)
    ));
  }
}

console.log(LCS(a, b, 0, 0, arr));
console.log(arr[0][0]);
console.log(arr);
