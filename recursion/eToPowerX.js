// OJ Link - https://oj.masaischool.com/contest/2313/problem/04


var [x, n] = [4, 2];

console.log(eToPowerX(x, n).toFixed(4));

function eToPowerX(x, n) {

    if( n == 0)
        return 1;

    return (1 * (x ** n) / fact(n)) + eToPowerX(x, n-1);
}

function fact(n){

    if(n === 1 || n === 0){
        return 1;
    }

    return n * fact(n-1);
}