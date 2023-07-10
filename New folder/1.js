function foo(arr,n){
    let s=[],ans=[];
    let t=arr[0];
    let count=1;
    s.push(arr[0]);
    ans.push(1);
    for(let i=1; i<n; i++){
        if(arr[i]===t){
            count++;
            if(count===t){
                while(s.length && s[s.length-1]===t){
                    s.pop();
                }
            }else{
                s.push(arr[i])
            }
        }else{
            t=arr[i];
            count=1;
            s.push(arr[i]);
        }
        ans.push(s.length);
    }
    console.log(ans.join(" "))
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<=tc; i++){
        let n=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        foo(arr,n)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`1
5
3 2 3 2 2
8
3 4 4 4 4 4 4 4`);
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