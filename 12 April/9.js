function encryptIt(str, n) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === str[i].toUpperCase() &&
      str[i] !== "." &&
      str[i] !== ":" &&
      str[i] !== "-" &&
      str[i] !== "/" &&
      str[i] !== "%" &&
      str[i] != +str[i]
    ) {
      for (let j = 0; j < upper.length; j++) {
        if (str[i] !== upper[j]) continue;

        for (let k = 0; k < n; k++) {
            j++;
            j = j % upper.length;
        }
        ans += upper[j];
        break;
      }
    } else if (
      str[i] === str[i].toLowerCase() &&
      str[i] !== "." &&
      str[i] !== ":" &&
      str[i] !== "-" &&
      str[i] !== "/" &&
      str[i] !== "%" &&
      str[i] != +str[i]
    ) {
      for (let j = 0; j < lower.length; j++) {
        if (str[i] !== lower[j]) continue;

        for (let k = 0; k < n; k++) {
            j++;
            j = j % lower.length;
        }
        ans += lower[j];
        break;
      }
    } else if (str[i] == +str[i]) {
      ans += `${(+str[i] + n) % 10}`;
    } else {
      ans += str[i];
    }
  }
  console.log(ans);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let str = input[0].trim();
  let n = +input[1];
  encryptIt(str, n);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`AaZz190./Usa
  26`);
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
