// OJ LINK - https://oj.masaischool.com/contest/2503/problem/03
//Correct
var n = 22;

function monetarySys(n) {

    if(n == 0) return 0;
    if(n == 1) return 1;
    if(n == 2) return 2;
    if(n == 3) return 3;

    return Math.max(n, monetarySys(Math.floor(n/2))+monetarySys(Math.floor(n/3))+monetarySys(Math.floor(n/4)));

}

console.log(monetarySys(n));