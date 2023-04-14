function cipherString(str,n){
    let i=0,ans="";
    while(i<n){
        let count=0,temp=str[i];
        while(temp===str[i]){
            count++;
            i++;
        }
        ans+=temp+count;
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
        let str=input[line++].trim();
        cipherString(str,n);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    5
    aabcc
    5
    aazaa`);
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