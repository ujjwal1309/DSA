function foo(a,b){
    for(let i=0; i<a.length; i++){
        if(a[i].toLowerCase()!=b[i].toLowerCase()){
            return console.log("Not angry")
        }

    }
    console.log("Angry")

}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let str=input[line++].trim();
        let str2=input[line++].trim();
        foo(str,str2)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    aaaa
    aaaA
    tradffA
    TradffD`);
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