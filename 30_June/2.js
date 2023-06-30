function foo(arr,n){
    console.log(arr.sort((a,b)=>{
        if(a<b){
            return 1
        }

        if(a>b){
            return -1
        }

        else return 0
    }).join(""))
}

function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let n=+input[0];
   let arr=new Array(n);
   for(let i=0; i<n; i++){
    arr[i]=input[i+1].trim()
   }
   foo(arr,n)
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    10
    2
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