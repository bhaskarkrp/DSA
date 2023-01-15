var arr = [['x', 'o', 'x'],
           ['o', 'x', 'x'],
           ['o', 'o', 'o']];

for(var i = 0; i < 3; i++) {
    if((arr[i][0] == "o" && arr[i][1] == "o" && arr[i][2] == "o") || (arr[0][i] == "o" && arr[1][i] == "o" && arr[2][i] == "o")) {
        console.log("o");
    }else if((arr[i][0] == "x" && arr[i][1] == "x" && arr[i][2] == "x") ||  (arr[0][i] == "x" && arr[1][i] == "x" && arr[2][i] == "x")){
        console.log("x");
    }
}
if((arr[0][0] == "o" && arr[1][1] == "o" && arr[2][2] == "o") || (arr[0][2] == "o" && arr[1][1] == "o" && arr[2][0] == "o")){
    console.log("o");
}else if((arr[0][0] == "x" && arr[1][1] == "x" && arr[2][2] == "x") || (arr[0][2] == "x" && arr[1][1] == "x" && arr[2][0] == "x")){
    console.log("x");
}