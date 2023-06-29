function foo(arr,n){
    arr.sort((a,b)=>a[0]-b[0])
    let ans=[arr[0]];
    let c=0;
    for(let i=1; i<n; i++){
        if(arr[i][0]<=ans[c][1]){
            ans[c][1]=Math.max(ans[c][1],arr[i][1]);
        }else{
            ans.push(arr[i]);
            c++;
        }
    }

    for(let i of ans){
        console.log(i.join(" "))
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+input[0];
    let arr=new Array(n);
    for(let i=0; i<n; i++){
        arr[i]=input[i+1].trim().split(" ").map(Number)
    }
   foo(arr,n)
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    1 3
    5 6
    2 4`);
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