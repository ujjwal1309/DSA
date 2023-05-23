function heightOfTree(arr,n){
    let ans=0
    for(let i=0; i<n; i++){
        let count=1;
        let m=arr[i]
        for(let j=i+1; j<n; j++){
            if(arr[j]>m){
                m=arr[j];
                count++;
            }
        }
        ans=Math.max(ans,count);
    }
    console.log(ans)
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    heightOfTree(arr,n)
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`9
    10 22 9 33 21 50 41 60 80`);
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