function longestGoodPerformance(arr, n) {
  let ans = 0;
  let i = 0;
  while (i < n) {
    if (arr[i] > 80) {
      let count = 0;
      while (arr[i] > 80) {
        i++;
        count++;
      }
      count++;
      ans = Math.max(count, ans);
    } else {
      i++;
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
    let arr = input[line++].trim().split(" ").map(Number);
    longestGoodPerformance(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`1
    7
    90 92 67 07 62 99 60`);
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
