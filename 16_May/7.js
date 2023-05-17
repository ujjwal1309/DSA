function similarText(virat, rohit) {
    let i=0; j=0;
    let ans=0;
    while(i<virat.length && j<rohit.length){
        if(virat[i]<rohit[i]){
            i++;
        }else if(virat[i]>rohit[i]){
            j++;
        }else{
            ans++;
            i++,j++;
        }
    }
    console.log(ans)
  }
  
  function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let virat = input[0].trim().split("").sort();
    let rohit = input[1].trim().split("").sort();
    similarText(virat, rohit);
  }
  if (process.env.USERNAME === "ujjwa") {
    runProgram(`AEDFHR
      ABCDGH`);
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
      process.exit(0);
    });
  }
  