function foo(n){
    if(n<=1){
        return 1
    }

    return n*foo(n-1)
}

function runProgram(input) {
    // Write code here
    input=+input.trim()

    console.log(foo(input))
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`5`);
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