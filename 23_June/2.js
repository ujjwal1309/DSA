function foo(arr,n,m,str){
    let count=0,flag=false;
    for(let i=0; i<str.length; i++){
        for(let j=0;j<m; j++){
            if(arr[count][j]==str[i]){
                flag=true;
                arr[count][j]=1;
                break;
            }

        }
        if(flag){
            flag=false;
        }else{
            return console.log("No")
        }
        count++;
        count=count%n;
    }
    console.log("Yes")
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let x=input[line++].trim().split(" ").map(Number);
        let n=x[0],m=x[1];
        let arr=new Array(n);
        for(let i=0; i<n; i++){
            arr[i]=input[line++].trim().split("");
        }
        let str=input[line++].trim();
        foo(arr,n,m,str)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`1
    3 3
    aba
    xyz
    bdr
    axbaydb
    `);
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