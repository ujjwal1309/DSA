function threeSum(arr,n){
    let s=new Set()

    for(let i=0; i<n-2; i++){

        for(let j=i+1; j<n-1; j++){

            for(let k=i+2; j<n; j++){

                if(arr[i]+arr[j]+arr[k]===0){
                    console.log("yes")
                    let trio=[arr[i],arr[j],arr[k]];
                    trio.sort((a,b)=>{
                        return a-b;
                    })
                    if(!s.has(trio)){
                        s.add(trio)
                    }

                }
            }
        }
    }
    console.log(s)
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        let arr=input[line++].trim().split(' ').map(Number);
        threeSum(arr,n)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`1
    6
    -1 0 1 2 -1 -4`);
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