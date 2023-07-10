function foo(str,n){
    let obj={};
    for(let i=0; i<n; i++){
        if(obj[str[i]]){
            obj[str[i]]++
        }else{
            obj[str[i]]=1;
        }
    }
    if(n%2==1){
        let count=0
        for(let i in obj){
            if(count==1){
                return console.log("No")
            }

            if(obj[i]%2===1){
                count++
            }
        }
    }else{
        for(let i in obj){
            if(obj[i]%2===1){
                return console.log("No")
            }
        }
    }

    console.log("Yes")
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        let str=input[line++].trim();
        foo(str,n)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    1
    a
    3
    aab
    4
    abbb`);
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