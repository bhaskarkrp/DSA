var str = "abadbc";
// abcabc

var arr = [];
var map = new Map();
var ans = "";

for(var i = 0; i < str.length; i++){
    if(map.has(str[i])){
        map.set(str[i], map.get(str[i]) + 1);
    }else{
        map.set(str[i], 1);
    }

    arr.push(str[i]);

    while(arr.length > 0){
        if(map.get(arr[0]) > 1){
            arr.shift();
        }else{
            break;
        }
    }

    if(arr.length == 0){
        ans += "#";
    }else{
        ans += arr[0];
    }
}

console.log(ans);