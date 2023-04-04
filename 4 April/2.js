function noddyExam(arr,n){
    let s=Infinity,l=-Infinity;
    for(let i of arr){
        s=Math.min(s,i);
        l=Math.max(l,i);
    }
    console.log(s,`\n${l}`)
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number);
    noddyExam(arr, n);
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`4
    -2 0 8 4`);
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
      process.exit(0) ;
    });
  }