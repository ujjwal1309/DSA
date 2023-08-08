function foo(arr,n,q){
    let obj={};
    for(let i=0; i<n; i++){
        obj[i+1]=[0,0];
    }
    
    for(let i of arr){
        if(i[0]===1){
            obj[`${i[1]}`][0]++
        }else if(i[0]===2){
            obj[`${i[1]}`][1]++
        }else{
            if(obj[`${i[1]}`][0]>=2 || obj[`${i[1]}`][1]>=1){
                console.log("Yes")
            }else{
                console.log("No")
            }
        }
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let x=input[0].trim().split(" ").map(Number);
    let n=x[0],q=x[1];
    let arr=new Array(q);
    for(let i=0; i<q; i++){
        arr[i]=input[i+1].trim().split(" ").map(Number);
    }
    foo(arr,n,q)
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3 9
    3 1
    3 2
    1 2
    2 1
    3 1
    3 2
    1 2
    3 2
    3 3
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