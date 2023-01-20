 var N = 6;
var arr1 = [1, 2, 2, 3, 4, 5];
var arr2 = [4, 4, 3, 2, 1, 1];

console.log(common(N, arr1, arr2));

function common(N, arr1, arr2){
    arr2 = arr2.reverse();

    var left = 0;
    var left2 = 0;
    ans = 0;

    while(left < N && left2 < N){
        if(arr1[left] === arr2[left2]){
            ans++;
            left++;
            left2++;
        }else if(arr1[left] > arr2[left2]){
            left2++;
        }else if(arr1[left] < arr2[left2]){
            left++;
        }
    }

    return ans;
}