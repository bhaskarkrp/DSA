// Oj Link - https://oj.masaischool.com/contest/1894/problem/1

var matrix = [  [3, 2, 1],
                [2, 2, 2],
                [1, 5, 1]
            ];

var n = matrix.length;
var m = matrix[0].length;

var p = 6;
var prod, count = 0;
for(var i = 0; i < n; i++) {
    for(var j = 0; j < m; j++) {
        if(i < n-2){
            prod = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j];
            if(prod == p){
                count++;
            }
        }
        if(j < m-2){
            prod = matrix[i][j] * matrix[i][j+1] * matrix[i][j+2];
            if(prod == p){
                count++;
            }
        }
        if(i < n-2 && j < m-2){
            prod = matrix[i][j] * matrix[i+1][j+1] * matrix[i+2][j+2];
            if(prod == p){
                count++;
            }
            prod = matrix[n-1-i][j] * matrix[n-2-i][j+1] * matrix[n-3-i][j+2];
            if(prod == p){
                count++;
            }
        }
    }
}

console.log(count);