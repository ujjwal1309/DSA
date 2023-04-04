function missingInteger(arr) {
  let max = 0;
  let obj = {};
  for (let i of arr) {
    max = Math.max(i, max);
    obj[i] = 0;
  }

  for (let i = 1; i <= max; i++) {
    if (obj[i] === undefined) {
      obj[i] = 0;
    } else {
      obj[i]++;
    }
  }

  for(let i in obj){
    if(obj[i]===0){
        console.log(i);
        return;
    }
  }
}

function runProgram(input) {
  // Write code here
  let arr = input.trim().split(" ").map(Number);
  missingInteger(arr);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`4 5 1 3`);
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
