function foo(arr,n){
    if(arr[0]!==arr[n-1]){

        
        while(arr[0]!=arr[arr.length-1]){
            arr.pop();
            arr.shift()
        }

        console.log(arr.length)

    }else{
        console.log(arr.length)
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        let arr=input[line++].trim().split("").map(Number);
        foo(arr,n);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`9
    3
    100
    4
    0111
    5
    10101
    6
    101010
    7
    1010110
    1
    1
    2
    10
    2
    11
    10
    1011011010
    `);
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