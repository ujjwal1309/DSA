function tallestAround(arr, n, k) {
  let arr2 = [];
  for (let i = 0; i <= n - k; i++) {
    let arr3 = [];
    for (let j = i; j < i + k; j++) {
      arr3.push(arr[j]);
    }
    arr2.push(arr3);
  }
  let ans = [];
  for (let i of arr2) {
    let max = Math.max(...i);
    ans.push(max);
  }
  console.log(ans.join(" "));
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let x = input[line++].trim().split(" ").map(Number);
    let n = x[0],
      k = x[1];
    let arr = input[line++].trim().split(" ").map(Number);
    tallestAround(arr, n, k);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`1
    9 3
    1 2 3 1 4 5 2 3 6`);
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
