function stoneAgeGame(arr,n){
    let r=0,s=n-1;
    let ram=arr[r],shyam=arr[s];
    let flag=false;
    while(r<s){
        if(ram>shyam){
            s--
            shyam+=arr[s];
        }else if(ram<shyam){
            r++
            ram+=arr[r]
        }else{
            return console.log(ram)
        }
    }
    console.log(0)
}

function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let tc=+input[0];
   let line=1;
   for(let i=0; i<tc; i++){
    let n=+input[line++];
    let arr=input[line++].trim().split(" ").map(Number);
    stoneAgeGame(arr,n)
   }
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    5
    100 8 97 2 1
    5
    100 9 96 2 1`);
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