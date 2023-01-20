// OJ Link - https://oj.masaischool.com/contest/2089/problem/01

var n = 26;

if(n <= 5){
    ans = 1;
}else{
    var rem = n % 5;
    if(rem == 0){
        ans = n/5;
    }else{
        ans = (n-rem)/5 + 1;
    }
}
console.log(ans);