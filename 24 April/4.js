function minMoves(str,n){
    let s=[];
    for(let i=0; i<n; i++){
        if(str[i]==="("){
            s.push(")")
        }else{
            if(str[i]===s[s.length-1]){
                s.pop()
            }
        }
    }
    console.log(s.length)
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        let str=input[line++].trim();
        minMoves(str,n)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`4
    2
    )(
    4
    ()()
    8
    ())()()(
    10
    )))((((())`);
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