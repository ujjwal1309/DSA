function foo(arr,n,k){
    let obj={};
    arr.sort((a,b)=>a-b)
    for(let i of arr){
        if(!obj[i]){
            obj[i]=1
        }else{
            obj[i]++
        }
    }
    let ans=[]
    for(let i in obj){
      ans.push([i,obj[i]])
    }
    ans.sort((a,b)=>b[1]-a[1]);

    let a=[];

    for(let i=0; i<k; i++){
      a.push(+ans[i][0])
    }

    console.log(a.sort((a,b)=>a-b).join(" "))
    
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let x=input[line++].trim().split(" ").map(Number);
        let n=x[0],k=x[1];
        let arr=input[line++].trim().split(" ").map(Number);
        foo(arr,n,k)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    6 2
    1 1 1 2 2 3
    1 1
    1`);
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