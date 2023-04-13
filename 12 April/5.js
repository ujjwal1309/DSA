function pashaGroup(arr, n) {
  let obj = {};
  arr.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  for (let i of arr) {
    let temp = i;
    temp = temp.split("");
    temp.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    temp = temp.join("");
    if (!obj[temp]) {
      obj[temp] = [i];
    } else {
      obj[temp].push(i);
    }
  }

  for(let i in  obj){
    console.log(obj[i].length);
    obj[i].sort((a, b) => {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      })
    console.log(obj[i].join("\n"));

  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = input[line++].trim();
    }
    pashaGroup(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    6
    eat
    tea
    tan
    ate
    nat
    bat
    3
    abc
    abc
    def`);
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
