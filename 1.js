function searchInsert(arr,n,k){
    let t=k;
    while(true){
        for(let i=0; i<n; i++){
            if(arr[i]===t){
                if(t<k){
                    return console.log(i+1)
                }else{
                    return console.log(i)
                }
            }
        }
        t--;
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number)
        let k=+input[line++]
        searchInsert(arr,n,k);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
4
1 3 5 6
5
4
1 2 5 6
3`);
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