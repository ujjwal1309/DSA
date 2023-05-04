function waysToZero(n){
    if(n<0){
        return 0
    }else if(n==0){
        return 1
    }

    return waysToZero(n-1)+waysToZero(n-2)+waysToZero(n-5)
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        console.log(waysToZero(n))
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`1
    4`);
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