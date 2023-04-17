function goodSubarray(arr,n){
    let ans=0;
    for(let i=0; i<n; i++){
        let arr2=[];
        for(let j=i; j<n; j++){
            arr2.push(arr[j]);
            let min=Math.min(...arr2);
            if(min===arr2[0]){
                ans++;
            }
        }
    }

    console.log(ans)
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
    2 2 2
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