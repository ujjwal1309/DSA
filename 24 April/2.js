function replaceGame(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }

  let flag=true;

  while(true){
    if(flag){
        if(obj["1"] && obj["0"]){
            obj["1"]--;
            obj["0"]--;
            flag=false
        }else{
            return console.log("NO")
        }
    }else{
        if(obj["1"] && obj["0"]){
            obj["1"]--;
            obj["0"]--;
            flag=true
        }else{
            return console.log("YES")
        }
    }
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str = input[line++].trim();
    replaceGame(str);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`3
    01
    1111
    0011
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
