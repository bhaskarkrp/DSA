// OJ LINK - https://oj.masaischool.com/contest/2438/problem/04

function reverse(arr, low, high) {

    while(low < high) {
        [arr[low], arr[high]] = [arr[high], arr[low]];
        low++;
        high--;
    }

    return arr;
};

var arr = [1, 32, 3, 2, 4, 5, 6, 7, 8];
// var arr = [1, 2];
var n = arr.length;
var rot = 4;
rot = rot % n;
console.log(rot);
var rev = reverse(arr, 0, arr.length-1);

reverse(rev, 0, rot-1);
reverse(arr, rot, rev.length-1);

console.log(rev);