var arr = [-3, -1, 3, 7, 11];

var low = 0;
var high = arr.length-1;
var ans = [];
while(low <= high) {
    if(Math.pow(arr[low], 2) < Math.pow(arr[high], 2)) {
        ans.push(Math.pow(arr[high], 2));
        high--;
    }else{
        ans.push(Math.pow(arr[low], 2));
        low++;
    }
}

console.log(ans.reverse().join(' '));