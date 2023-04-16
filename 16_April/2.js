function nearestGreater(arr,n){
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    
    let low = 1;
    let high = Math.max(...arr);
    let ans = high;
    
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      let tempProduct = 1;
      
      for (let i = 0; i < n; i++) {
        tempProduct *= Math.min(arr[i], mid);
      }
      
      if (tempProduct > product) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
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
    nearestGreater(arr,n)
   }
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`5
    5
    4 2 1 10 6
    3
    1 1 1
    10
    9 7 3 7 6 3 4 5 1 4
    5
    1 2 1 2 1
    10
    7 1 5 3 1 6 4 3 3 7`);
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