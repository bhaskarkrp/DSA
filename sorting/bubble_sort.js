var arr = [3, 5, 0, 9, 8];

for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length-1-i; j++){
        if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
}
console.log(arr)