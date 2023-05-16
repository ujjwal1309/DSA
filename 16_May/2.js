function increasing(arr,n){
    arr.sort((a,b)=>{
        return a-b
    })
    
    for(let i=0; i<n-1; i++){
        if(arr[i]>=arr[i+1]){
            return console.log("NO")
        }
    }

    console.log("YES")
}

function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let tc=+input[0];
   let line=1;
   for(let i=0; i<tc; i++){
    let n=+input[line++];
    let arr=input[line++].trim().split(" ").map(Number);
    increasing(arr,n)
   }
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    4
    1 1 1 1
    5
    8 7 1 3 4
    1
    5
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