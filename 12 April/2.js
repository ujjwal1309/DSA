function searchTheEvil(arr, n, m, k) {
  for (let i of arr) {
    if (i.includes(k)) return console.log(true);
  }

  console.log(false)
}

//Time complexity of this code is actually O(n^2);

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let x = input[line++].trim().split(" ").map(Number);
    let n = x[0],
      m = x[1];
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = input[line++].trim().split(" ").map(Number);
    }
    let k = +input[line++];
    searchTheEvil(arr, n, m, k);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    4 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16 
    13
    4 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16 
    17`);
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
