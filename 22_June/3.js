function foo(arr,n){
    let obj={},ans=0,count=0;
    for(let i of arr){
        if(!obj[i]){
            obj[i]=1;
            count++
        }else{
            obj={};
            obj[i]=1;
            ans=Math.max(ans,count);
            count=1
        }
    }
    console.log(ans)
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
    runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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