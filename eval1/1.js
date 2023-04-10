function grid(arr, n, m) {
  let i = 0,
    j = 0,
    ans = 0;

  while (i < n && j < m && i >= 0 && j >= 0) {
    if (arr[i][j] === 1) {
      console.log(ans);
      return;
    } else if (arr[i][j] === "R") {
      arr[i][j] = 1;
      j++;
    } else if (arr[i][j] === "D") {
      arr[i][j] = 1;
      i++;
    } else if (arr[i][j] === "U") {
      arr[i][j] = 1;
      i--;
    } else if (arr[i][j] === "L") {
      arr[i][j] = 1;
      j--;
    }
    ans++;
  }
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
      arr[i] = input[line++].trim().split("");
    }
    grid(arr, n, m);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`1
3 4
RRDR
LLUD
LLLL
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
