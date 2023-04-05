function missingNo(arr, n) {
  arr.sort((a, b) => {
    return a - b;
  });

  let count = 1;
  for (let i of arr) {
    if (i < 1 || i<count) {
      continue;
    }

    if (count === i) {
      count++;
    } else {
      console.log(count);
      return;
    }
  }
  console.log(count);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    missingNo(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`3
    3
    1 2 0
    4
    3 4 -1 1
    5
    7 8 9 11 12`);
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
