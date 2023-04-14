function stringComparison(n, str, m, str2) {
  let i = 0;
  while (i < n && i < m) {
    if (str[i] < str2[i]) {
      return console.log("No Swap!");
    } else if (str[i] > str2[i]) {
      return console.log("Swap!");
    } else {
      i++;
    }
  }

  if (str2.length < str.length) {
    return console.log("Swap!");
  } else {
    return console.log("No Swap!");
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let str = input[line++].trim();
    let m = +input[line++];
    let str2 = input[line++].trim();
    stringComparison(n, str, m, str2);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    6
    rutwik
    4
    rutw
    4
    aman
    6
    rutwik
    `);
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
