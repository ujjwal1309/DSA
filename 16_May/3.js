function increasing(arr,n){
    for(let i=0; i<n; i++){
        let arr2=[];
        for(let j=i; j<n; j++){
            arr2.push(arr[j]);
            if(checkEven(arr2)){
                return console.log("Yes")
            }
        }
    }
    console.log("No")
}

function checkEven(arr){
    let sum=0;
    for(let i of arr){
        sum+=i
    }

    if(sum%2==0){
        return true
    }else{
        return false;
    }
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
    runProgram(`2
    1
    5
    4
    1 2 3 4`);
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