function foo(arr,n){
    let ans=0;
    let arr2=[];

    for(let i=0; i<n; i++){
        if(i==0){
            arr2[i]=arr[i]

        }else{
            arr2[i]=Math.max(arr[i],arr2[i-1]+arr[i])
        }
        ans=Math.max(arr2[i],ans);
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