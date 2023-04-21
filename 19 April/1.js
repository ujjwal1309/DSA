function unique(str) {
  let obj = {};
  let q = [];
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
      q.push(str[i]);
    } else {
      obj[str[i]]++;
      while (obj[q[0]] > 1) {
        q.shift();
      }
    }

    if (q.length) {
      ans += q[0];
    } else {
      ans += "#";
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
    let str = input[line++].trim();
    unique(str);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    abadbc
    abcabc`);
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
