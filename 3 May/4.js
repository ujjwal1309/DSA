function foo(str){
    let obj={};
    let q=[],ans="";
    for(let i=0; i<str.length; i++){
        if(!obj[str[i]]){
            obj[str[i]]=1;
            q.push(str[i]);
        }else{
            obj[str[i]]++
           while(q.length && obj[q[0]]!==1){
            q.shift()
           }
        }
        if(q.length){
            ans+=q[0];
        }else{
            ans+="#"
        }
    }

    console.log(ans)
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    for(let i=0; i<tc; i++){
        let str=input[i+1].trim();
        foo(str)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    abadbc
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