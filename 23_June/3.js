function foo(arr,n,m){
    console.log(arr);
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
        foo(arr,n,m)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`1
    3 3
    1 1 1
    1 0 1
    1 1 1`);
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

  //Select * from employees where salary >= (select avg(salary) from employess group by department) 