function sideLane(arr, n) {
  let s = [],
    e = 1;
  for (let i of arr) {
    s.push(i);
    while (s.length && s[s.length - 1] === e) {
      s.pop();
      e++;
    }
  }

  !s.length ? console.log("yes") : console.log("no");
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let line = 0;
  while (+input[line]) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    sideLane(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`5
    5 1 2 4 3 
    0`);
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
