function foo(arr, n) {
  let obj = {};
  let ans = 0;
  let i = 0,
    j = 0;
  while (i < n && j < n) {
    if (obj[arr[j]] === undefined) {
      obj[arr[j]] = j;
    } else if (obj[arr[j]]!==undefined  && obj[arr[j]] >= i) {
      i = obj[arr[j]] + 1;
      obj[arr[j]] = j;
    }else{
        obj[arr[j]]=j
    }
    ans = Math.max(ans, (j - i));
    j++;
  }
  console.log(ans+1)
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    foo(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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
