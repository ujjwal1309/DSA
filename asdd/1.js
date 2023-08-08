function foo(str){
    let obj={};
    for(let i=0; i<str.length; i++){
        if(!obj[str[i]]){
            obj[str[i]]=1
        }else{
            obj[str[i]]++
        }
    }

    let ans;

    for(let i in obj){
        if(obj[i]===1){
            ans=i;
            break;
        }
    }

    if(!ans){
        return console.log(-1)
    }

    for(let i=0; i<str.length; i++){
        if(str[i]===ans){
            console.log(i)
        }
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+input[0];
    for(let i=0; i<n; i++){
        let str=input[i+1].trim();
        foo(str)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
leetcode
loveleetcode
aabb`);
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