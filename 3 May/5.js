function foo(str,n,k){
    let count=0
    for(let i=0; i<n; i++){
        let str2="";
        for(let j=i; j<n; j++){
            str2+=str[j];
            if(str2.length===k){
                if(check(str2)){
                    count++
                }
            }else{
                continue;
            }
        }
    }

    console.log(count)
}

function check(str){
    let obj={};

    for(let i=0; i<str.length; i++){
        if(!obj[str[i]]){
            obj[str[i]]=1
        }else{
            obj[str[i]]++;
        }
    }

    for(let i in obj){
        if(obj[i]>1){
            return false;
        }
    }

    return true
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let x=input[0].trim().split(" ").map(Number);
    let n=x[0],k=x[1];
    let str=input[1].trim();
    foo(str,n,k)
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`4 2
    abcc`);
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