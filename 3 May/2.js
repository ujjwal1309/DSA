function foo(arr,n){
    let v=0,a=0;
    let count=0;
    let flag=true
    for(let i of arr){
        if(flag){
            a+=i;
            if(i%2===1){
                flag=false;
            }
        }else{
            v+=i;
            if(i%2===1){
                flag=true;
            }
        }
        count++;
        if(count===6){
            flag=!flag;
            count=0
        }
    }

    if(a>v){
        console.log("AB de Villiers");
    }else if(a<v){
        console.log("Virat Kohli")
    }else{
        console.log("Tie")
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        foo(arr,n);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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