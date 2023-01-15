var str = '?ba??b';

var arr = str.split("");
// console.log(arr);

for(var i = 0; i < arr.length; i++){
    if(arr[i] == '?'){
        if(arr[i - 1] == 'a' || arr[i + 1] == 'a'){
            arr[i] = "b";
        }else{
            arr[i] = "a";
        }
    }
}

console.log(arr.join(""));