function pastaMan(arr1, arr2) {
  let obj1 = {};
  for (let i of arr1) {
    if (obj1[i]) {
      obj1[i]++;
    } else {
      obj1[i] = 1;
    }
  }

  let obj2 = {};
  for (let i of arr2) {
    if (obj2[i]) {
      obj2[i]++;
    } else {
      obj2[i] = 1;
    }
  }

  for (let i in obj2) {
    if (obj1[i] && obj2[i] <= obj1[i]) continue;

    return console.log("ANGRY");
  }

  console.log("HAPPY");
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let x = input[line++].trim().split(" ").map(Number);
    let arr1 = input[line++].trim().split(" ").map(Number);
    let arr2 = input[line++].trim().split(" ").map(Number);
    pastaMan(arr1, arr2);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
3 2
1 1 3
3 1
1 1
10
1`);
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
