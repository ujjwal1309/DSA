function threeSum(arr,n){
    let ans=[];

    let sum=arr[0];
    ans.push(sum)

    for(let i=1; i<n; i++){
        sum+=arr[i]
        if(!ans.includes(sum)){
            ans.push(sum)
        }
    }



    ans.sort((a,b)=>b-a);
    console.log(ans[0])
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number);
      threeSum(arr, n);
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