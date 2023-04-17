function longestSub(str) {
  let n = str.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let str2 = "";
    for (let j = i; j < n; j++) {
      str2 += str[j];
      if (checkPalindrome(str2)) {
        ans = Math.max(ans, str2.length);
      }
    }
  }
  console.log(ans);
}

function checkPalindrome(str) {
  let n = str.length;
  let str2 = "";
  for (let i = n - 1; i >= 0; i--) {
    str2 += str[i];
  }
  if (str2 === str) return true;

  return false;
}

function runProgram(input) {
  // Write code here
  input = input.trim();
  let str = input;
  longestSub(str);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`thisracecarisgood`);
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
