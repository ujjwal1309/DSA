function decipher(str, n) {
  let ans = "";
  for (let i = 0; i < n; i = i + 2) {
    for (let j = 0; j < +str[i + 1]; j++) {
      ans += str[i];
    }
  }
  console.log(ans);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let str = input[line++].trim();
    decipher(str, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    6
    a2b1c2
    6
    a2z1a2`);
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
