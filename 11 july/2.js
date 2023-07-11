function foo(n){
    if(n<0){
        return 0
    }
    if(n==1){
        return 1
    }

    return foo(n-1)+foo(n-2)
}

function runProgram(input) {
    // Write code here
    input=+input.trim()

    console.log(foo(input))
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`4`);
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