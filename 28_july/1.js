function foo(arr,n){
    arr.sort((a,b)=>a-b);

    let ans=[];
    let s=new Set()

    for(let i=0; i<n-2; i++){
        for(let j=i+1; j<n-1; j++){
            for(let k=j+1; k<n; k++){
                if(arr[i]+arr[j]+arr[k]===0){
                    let arr2=[arr[i],arr[j],arr[k]];

                    if(!s.has(arr2.join(""))){
                        s.add(arr2.join(""))
                        ans.push(arr2);
                    }
                }
            }
        }


    }

    console.log(ans)
}

// Time O(n^3)

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        let arr=input[line].trim().split(" ").map(Number);
        foo(arr,n)
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