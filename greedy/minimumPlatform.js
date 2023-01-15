// OJ LINK - https://oj.masaischool.com/contest/2455/problem/04

var arr = ['9:00', '9:40', '9:50', '11:00', '15:00', '18:00'];
var dep = ['9:10', '12:00', '11:20', '11:30', '19:00', '20:00'];
var n = 6;
for(var i = 0; i < n; i++) {
    var a = arr[i].split(':').join('');
    var b = dep[i].split(':').join('');

    arr[i] = a;
    dep[i] = b;
}

arr.sort(function(a, b) {
    return a - b;
});

dep.sort(function(a, b) {
    return a - b;
});

// console.log(arr, dep)

var plat = 1;
var a = 1;
var b = 0;
var ans = 0;

while(a < n && b < n) {
    if(+arr[a] > +dep[b]) {
        plat--;
        b++;
    }else if(+arr[a] < +dep[b]) {
        plat++;
        a++;
    }

    if(plat > ans){
        ans = plat;
    }
}
console.log(ans);