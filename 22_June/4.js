function foo(arr,n){
    let max=0,sum=0;
    for(let i of arr){
        if(sum<0){
            sum=0
        }

        sum+=i;
        max=Math.max(sum,max);
    }
    console.log(max)
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number);
      foo(arr, n);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    5
    1 2 0 4 5
    5
    3 -4 1 2 -1`);
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