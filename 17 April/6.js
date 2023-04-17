function goodSubarray(arr,n){
    let i=0; j=0;
    let count=0;
    while(i<n){
        if(arr[i]<=arr[j]){
            count++;
            j++;
            if(j==n){
                i++;
                j=i;
            }
        }else{
            i++;
        }
    }

    console.log(count)
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    goodSubarray(arr,n)
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    3 2 1
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