function foo(str,n){
    if(check(str)){
        return console.log("YES")
    }

    let obj={};
    for(let i=0; i<n; i++){
        obj[str[i]]=1
    }


    for(let i in obj){
        let s="";
        for(let j=0; j<n; j++){
            if(str[j]!==i){
                s+=str[j];
            }
        }
        if(check(s)){
            return console.log("YES")
        }
    }

    console.log("NO")
}

function check(s){
    let str="";
    for(let i=s.length-1; i>=0; i--){
        str+=s[i];
    }
    if(str===s){
        return true
    }else{
        false
    }
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
    5
    abcba
    9
    aaaaakaaa
    6
    abcabc`);
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