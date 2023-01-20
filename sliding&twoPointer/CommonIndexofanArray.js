var N = 6;
var arr1 = [1, 2, 3, 4, 5, 6];
var M = 3;
var arr2 = [3, 3, 5];

console.log(commonIndexofanArray(N, arr1, M, arr2));

function commonIndexofanArray(N, arr1, M, arr2) {
    var ans = [];
    var left = 0;
    var left2 = 0;


    while(left < N && left2 < M) {
        if(arr1[left] == arr2[left2]) {
            ans.push(arr1[left]);
            left++;
            left2++;
        }else if(arr1[left] > arr2[left2]) {
            left2++;
        }else if(arr1[left] < arr2[left2]) {
            left++;
        }
    }

    if(ans.length > 0){
        return ans.join(" ");
    }else{
        return -1;
    }
}