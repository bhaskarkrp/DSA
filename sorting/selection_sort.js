var arr = [3, 5, 0, 9, 8];

for(var i = 0; i < arr.length; i++) {
    var min = arr[i];
    for(var j = i+1; j < arr.length; j++) {
        if(arr[j] < min) {
            min = arr[j];
            var index = j;
        }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
}
console.log(arr);

// <---------------------------------------------------------------->

arr.sort(function(a, b) {
    return a-b;
})
// console.log(arr);
