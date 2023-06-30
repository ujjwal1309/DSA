function foo(arr,n,k){
    let ans=0;
   for(let i=0; i<n; i++){
    let a=[];
    for(let j=i; j<n; j++){
        a.push(arr[j]);
        if(sumA(a)){
            ans++
        }
    }
   } 
   console.log(ans)
}

function sumA(arr){
    let sum=0;
    for(let i of arr){
        sum+=i
    }

    if(sum%3!==0){
        return true;
    }

    return false;
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let x=input[0].trim().split(" ").map(Number);
    let n=x[0],k=x[1];
    let arr=input[1].trim().split(" ").map(Number);
    foo(arr,n,k)
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`4 3
    2 3 4 6`);
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