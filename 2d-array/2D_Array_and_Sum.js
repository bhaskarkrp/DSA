// Oj Problem link - https://oj.masaischool.com/contest/1894/problem/2

var matrix = [
            [3, 2, 1],
            [2, 2, 2],
            [1, 5, 1]
            ];

var s = 6;
var n = 3;
var m = 3;
var sum;
var count = 0;

for(var i = 0; i < n; i++) {
    
    for(var j = 0; j < m; j++) {
        if(j < m-2){
            // console.log(j)
            sum = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2];
            if(sum == s){
                count++;
            }
        }
        if(i < n-2){
            sum = matrix[i][j] + matrix[i+1][j] + matrix[i+2][j];
            if(sum == s){
                count++;
            }
        }
        if(i < n-2 && j < m-2){
            sum = matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2];
            if(sum == s){
                count++;
            }
            sum = matrix[n-1-i][j] + matrix[n-2-i][j+1] + matrix[n-3-i][j+2];
            if(sum == s){
                count++;
            }
        }

    }
}
console.log(count);