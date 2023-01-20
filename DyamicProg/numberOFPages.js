// OJ LINK = https://oj.masaischool.com/contest/2596/problem/04

var n = 74;

function minimumPage(n) {

    if(n < 0){
        return Math.min();
    }

    if(n == 0){
        return 0;
    }


    return 1 + Math.min(minimumPage(n-10), minimumPage(n-12));

};

console.log(minimumPage(n));