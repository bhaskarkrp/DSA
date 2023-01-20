

var r = 22;
var c = 33;

var arr = [];
for(var i = 0; i <= r; i++){
    var a = [];
    for(var j = 0; j <= c; j++){
        a[j] = -1;
    }
    arr.push(a);
}

// console.log(arr);

function gridWays(r, c, arr) {

    if(arr[r][c] !== -1){
        return arr[r][c];
    }

    if(r == 0 || c == 0){
        arr[r][c] = 0;
        return arr[r][c];
    }

    if(r == 1 && c == 1){
        arr[r][c] = 1;
        return arr[r][c];
    }

    return arr[r][c] = gridWays(r-1, c, arr) + gridWays(r, c-1, arr);
}

console.log(gridWays(r, c, arr));