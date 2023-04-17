function newYear(n) {
  let sum = 0,
    count = 0;
  for (let i = 1; i < Infinity; i++) {
    sum += i;
    if (sum > n) {
      return console.log(count);
    }
    count++;
    n -= sum;
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim();
  let num = +input;
  newYear(num);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`25`);
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
