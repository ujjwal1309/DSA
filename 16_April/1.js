function nearestSmaller(arr, n) {
  let s = [],
    x = [];
  for (let i = 0; i < n; i++) {
    while (s.length && arr[s[s.length - 1]] >= arr[i]) {
      s.pop();
    }

    s.length ? x.push(s[s.length - 1]) : x.push(-1);

    s.push(i);
  }

  s = [];
  let y = [];
  for (let i = n - 1; i >= 0; i--) {
    while (s.length && arr[s[s.length - 1]] >= arr[i]) {
      s.pop();
    }

    s.length ? y.push(s[s.length - 1]) : y.push(-1);

    s.push(i);
  }

  y.reverse();

  let ans = [];

  for (let i = 0; i < n; i++) {
    if (x[i] == -1 && y[i] === -1) {
      ans.push(-1);
    } else if (x[i] === -1 && y[i] !== -1) {
      ans.push(arr[y[i]]);
    } else if (x[i] !== -1 && y[i] === -1) {
      ans.push(arr[x[i]]);
    } else if (Math.abs(i - x[i]) < Math.abs(i - y[i])) {
      ans.push(arr[x[i]]);
    } else if (Math.abs(i - x[i]) > Math.abs(i - y[i])) {
      ans.push(arr[y[i]]);
    } else {
      ans.push(arr[x[i]]);
    }
  }

  console.log(ans.join(" "))
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    nearestSmaller(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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
