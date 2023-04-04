function equilibriumElement(arr, n) {
  let sum1 = 0;
  for (let i of arr) {
    sum1 += i;
  }

  let sum2 = arr[0];
  for (let i = 1; i < n - 1; i++) {
    let sum = sum1 - sum2 - arr[i];
    if (sum === sum2) {
      console.log(i);
      return;
    }

    sum2 += arr[i];
  }

  console.log(-1);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    equilibriumElement(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    5
    15 1 5 5 5
    3
    1 2 3`);
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
