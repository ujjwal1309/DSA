function foo(arr,n){
    let ans=0;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            let d=arr[j]-arr[i];
            ans=Math.max(ans,d);
        }
    }
    console.log(ans)
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        foo(arr,n)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    6
    7 1 5 3 6 4
    5
    7 6 4 3 1`);
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