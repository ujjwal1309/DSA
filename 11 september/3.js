function foo(arr,n){
    let ans=[];
    let p=1;
    for(let i=0; i<n; i++){
        ans[i]=p;
        p*=arr[i];
    }

    p=1;
    for(let j=n-1; j>=0; j--){
        ans[j]*=p;
        p*=arr[j]
    }
    console.log(ans.join(" "))
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
    4
    1 2 3 4
    5
    -1 1 0 3 -3`);
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