function foo(arr,n){
    let sum=0;
    for(let i of arr){
        sum+=i
    }

    let f=arr[0];
    for(let i=1; i<n; i++){
        let ans=sum-f-arr[i];
        if(ans===f){
            return console.log(i)
        }
        f+=arr[i]
    }

    console.log(-1)
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
    5
    15 1 5 5 5
    3
    1 2 3`);
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