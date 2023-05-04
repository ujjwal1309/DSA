function movingZeroes(arr,n){
    let arr1=[],arr2=[];

    for(let i of arr){
        if(i==0){
            arr1.push(i);
        }else{
            arr2.push(i);
        }
    }

    console.log(arr2.join(" ")+" "+arr1.join(" "))
}

function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let tc=+input[0];
   let line=1;
   for(let i=0; i<tc; i++){
    let n=+input[line++].trim()
    let arr=input[line++].trim().split(" ").map(Number);
    movingZeroes(arr,n)
   }
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`1
    5
    0 1 0 12 3`);
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