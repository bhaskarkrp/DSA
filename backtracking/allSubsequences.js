function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var str = input[1].trim();

  find(n, str, "", 0);
}

function find(n, str, new_str, curr) {
    if(new_str.length > 0) {
        console.log(new_str);
    }

    if(curr == n) {
        return;
    }

    for(var i = curr; i < n; i++) {
        new_str += str[i];
        find(n, str, new_str, i+1);
        new_str = new_str.slice(0, -1);
    }
    return;
}

if (process.env.USER === "bhaskar") {
  runProgram(`4
  abcd`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}