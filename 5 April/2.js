function repaetedAndMissing(arr,n){
    let check=0,count=1;
    let m,r;
    for(let i of arr){
        if(count===i){
            count++
        }else{
            if(check===1){
                m=count
                console.log(m,r);
                return;
            }

            r=i
        }
    }
    m=count
    console.log(m,r)
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        repaetedAndMissing(arr,n)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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