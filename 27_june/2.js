function foo(arr,n){
    let obj={};

    let a=[]

    for(let i of arr){
        let s=[...i];
        s=s.sort().join("")
        a.push(s)
    }

    a.sort()

    console.log(a)

    for(let i of a){
        obj[i]=0
    }

    console.log(obj)

    for(let i of arr){
        let s=[...i];
        s=s.sort().join("")
        if(!obj[s]){
            obj[s]=[i.join("")];
        }else{
            obj[s].push(i.join(""))
        }
    }
    for(let i in obj){
        console.log(obj[i].length);
        obj[i].sort();
        for(let j of obj[i]){
            console.log(j)
        }
    }
}


function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        let arr=new Array(n);
        for(let i=0; i<n; i++){
            arr[i]=input[line++].trim().split("");
        }
        foo(arr,n)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    6
    eat
    tea
    tan
    ate
    nat
    bat
    3
    abc
    abc
    def`);
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