// OJ Link -  https://oj.masaischool.com/contest/1894/problem/2

var matrix = [
    ['s','a','f','e','r'],
    ['a','m','j','a','d'],
    ['b','a','b','o','l'],
    ['a','a','r','o','n'],
    ['s','o','n','g','s'],
    ];

var n = matrix.length;
var m = matrix[0].length;

var output = "";
var count = 0;
for(var i = 0; i < n; i++) {
    for(var j = 0; j < m; j++) {
        if(i < n-3){
            output += matrix[i][j] + matrix[i+1][j] + matrix[i+2][j] + matrix[i+3][j];
            if(output == "saba"){
                count++;
            }
            output = "";
        }
        if(j < m-3){
            output = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2] + matrix[i][j+3];
            if(output == "saba"){
                count++;
            }
            output = "";
        }
        if(i < n-3 && j < m-3){
            output = matrix[i][j] + matrix[i+1][j+1]+ matrix[i+2][j+2] + matrix[i+3][j+3];
            if(output == "saba"){
                count++;
            }
            output = "";
            output = matrix[n-1-i][j] + matrix[n-2-i][j+1] + matrix[n-3-i][j+2] + matrix[n-4-i][j+3];
            if(output == "saba"){
                count++;
            }
            output = "";
        }
    }
}
console.log(count);