function foo(arr,n,k){
    for(let i=0; i<n; i++){
      if(arr[i]===k){
       return console.log(i)
      }
    }
    console.log(-1)
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let x=input[0].trim().split(" ").map(Number);
    let n=x[0],k=x[1];
    let arr=input[1].trim().split(" ").map(Number)
   foo(arr,n,k)
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`6 6
    3 4 7 9 1 2`);
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