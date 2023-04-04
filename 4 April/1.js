function noddyExam(arr, n, k) {
  let count = 0;
  let ans = 0;
  for (let i of arr) {
    if (i > k) {
      if (count === 1) {
        break;
      }
      count++;
      continue;
    }
    ans++;
  }
  console.log(ans);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let x = input[0].trim().split(" ").map(Number);
  let n = x[0],
    k = x[1];
  let arr = input[1].trim().split(" ").map(Number);
  noddyExam(arr, n, k);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`9 6
    4 3 7 6 7 2 2 2 2
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
