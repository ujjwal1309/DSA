function foo(arr,n){
    let ans=`${arr[0][0]} `;
    let i=1;
    let flag=true;
    while(i<n){
        if(flag){

            let j=0,k=i;
            while(j<=i && k>=0){
                ans+=arr[j][k]+" ";
                j++;
                k--;
            }
            flag=false;
            i++

        }else{

            let j=i,k=0;
            while(j>=0 && k<=i){
                ans+=arr[j][k]+" ";
                j--;
                k++;
            }
            flag=true;
            i++
        }

    }
    i=1;
    flag=false
    while(i<n){
        if(flag){

            let j=n-1,k=i;
            while(j>=0 && k<n){
                ans+=arr[j][k]+" ";
                j--;
                k++;
            }
            flag=false;
            i++

        }else{

            let j=i,k=n-1;
            while(j<n && k>=0){
                ans+=arr[j][k]+" ";
                j++;
                k--;
            }
            flag=true;
            i++
        }

    }
    console.log(ans)
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
            arr[i]=input[line++].trim().split(" ").map(Number);

        }
        foo(arr,n)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    1
    20
    2
    1 2
    3 4
    5
    1 2 3 4 5
    4 5 6 7 8
    7 8 9 10 11
    1 2 3 4 5
    6 7 8 9 10`);
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