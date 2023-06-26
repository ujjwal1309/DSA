function foo(arr){
    let obj={};
    let n=arr.length+1;
    for(let i=1; i<=n; i++){
        obj[i]=0;
    }
    for(let i=0; i<arr.length; i++){
        obj[arr[i]]++
    }
    for(let i in obj){
        if(obj[i]==0){
            return console.log(i)
        }
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let arr=input[0].trim().split(" ").map(Number);
    foo(arr);
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`4 5 1 3`);
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