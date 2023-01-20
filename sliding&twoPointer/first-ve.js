//First -ve integer in every window of size k

var arr = [12, -1, -7, 8, -15, 30, -16, 28];
var k = 3;

var res = [];
var ans = [];

// for(var i = 0; i < k; i++) {
//     if(arr[i] < 0){
//         res.push(arr[i]);
//     }
// }
// // console.log(res);
// ans.push(res[0]);

// for(i = k; i < arr.length; i++) {
//     if(arr[i] < 0){
//         res.push(arr[i]);
//     }
//     if(res[0] == arr[i-k]){
//         res.shift();
//     }
//     ans.push(res[0]);
//     // console.log(res);
// }

// console.log(ans);