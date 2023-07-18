function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let x=input[line++].trim().split(" ").map(Number);
        let n=x[0],k=x[1];
        let arr=input[line++].trim().split(" ").map(Number);

        //------------------------------------------------------------------------------------------->

        let m=Math.floor(n/2);
        m=m-k;
        if(m<0){
            console.log(-1)
        }else{
            console.log(arr[m])
        }
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    9 3
    3 4 7 5 6 16 5 61 16
    6 2 
    1 14 6 16 4 10
    6 10
    1 4 6 16 4 10`);
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