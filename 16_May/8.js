function sumExist(arr,n,k){
    for(let i=0; i<n; i++){
        let arr2=[];
        for(let j=i; j<n; j++){
            arr2.push(arr[j]);
            if(sumArr(arr2)===k){
                return console.log("yes")
            }
        }
    }
    console.log("no")
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    let k=+input[2];
    sumExist(arr,n,k)
   
  }

  function sumArr(arr){
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    return sum
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`6
    3 34 4 12 5 2
    9`);
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