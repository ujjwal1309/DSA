function rowGame(arr, n, m) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!obj[arr[i][j]]) {
        obj[arr[i][j]] = 1;
      } else {
        obj[arr[i][j]]++;
      }
    }
  }

  let ans = 0;

  for (let i in obj) {
    if (obj[i] >= n) {
      ans++;
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
    let x = input[line++].trim().split(" ").map(Number);
    let n = x[0],
      m = x[1];
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = input[line++].trim().split(" ").map(Number);
    }
    rowGame(arr, n, m);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
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
