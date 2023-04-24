function subsequenceCheck(str1,str2,n,m){
    let i=0,j=0;
    while(i<n && j<m){
        if(str1[i]===str2[j]){
            i++;
        }
        j++;
    }

    i>=n ? console.log("YES") : console.log("NO")
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let x=input[line++].trim().split(" ").map(Number);
        let n=x[0],m=x[1];
        let str1=input[line++].trim();
        let str2=input[line++].trim();
        subsequenceCheck(str1,str2,n,m)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    4 6
    abcd
    aebcrd
    5 7
    aaacc
    abaccac`);
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