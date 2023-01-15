var arr =  [[1, 2, 3, 4],
            [5, 6, 7, 8],  
            [9, 10, 11, 12]];

var r = arr.length;
var c = arr[1].length;

//------------Traverse 1-------------------------------- 
// var ans1 = "";
// for(var i = 0; i < c; i++) {
//     for(var j = r-1; j >= 0; j--) {
//         ans = ans + arr[j][i] + " ";
//     }
// }
// console.log(ans1);
// output - ans = 9 5 1 10 6 2 11 7 3 12 8 4 

//------------Traverse 2--------------------------------
var ans2 = "";
for(var i = 0; i < c; i++) {
    for(var j = 0; j < r; j++) {
        ans2 = ans2 + arr[j][i] + " ";
    }
}
console.log(ans2);
// output - ans2 = 1 5 9 2 6 10 3 7 11 4 8 12

//------------Traverse 3 (Zig Zag)--------------------------------
var ans3 = "";
for(var i = 0; i < r; i++) {
    for(var j = 0; j < c; j++) {
        if(i % 2 == 0){
            ans3 = ans3 + arr[i][c-1-j] + " ";
        }else{
            ans3 = ans3 + arr[i][j] + " ";
        }
    }
}
console.log(ans3);
// output - ans3 = 4 3 2 1 5 6 7 8 12 11 10 9