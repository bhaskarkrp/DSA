// Oj Problem link - https://oj.masaischool.com/contest/1859/problem/7

var matrix = [[0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]];

var N = matrix.length;
var M = matrix[0].length;
// var arr = [];
var arrF = [];

// console.log(N, M);
for(var i = 0; i < M; i++) {
    var arr = [];
    for(var j = 0; j < N; j++) {
        arr.push(matrix[j][i]);
    }
    arrF.push(arr);
}
// console.log(matrix);
for(var i = 0; i < M; i++) {
    console.log(arrF[i].join(" "));
}