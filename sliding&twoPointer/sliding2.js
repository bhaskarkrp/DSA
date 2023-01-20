//Find a subarray having the given sum in an integer array

// var arr = [2, 6, 0, 9, 7, 3, 1, 4, 1, 10]
// var arr = [0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10];
var arr = [0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10];
var target = -3;
// var target = 15;

console.log(find(arr, target));

function find(arr, t){
    var l = 0;
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        sum += arr[i];

        while(sum >= target){
            if(sum == target){
                // return l + " - " + i;
            }else{
                sum -= arr[l];
                console.log(arr[l] + " - " + arr[i]);
                l++;
            }
        }
    }
}
//Not correct
//https://www.techiedelight.com/find-subarray-having-given-sum-given-array/