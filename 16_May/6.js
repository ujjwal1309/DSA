function similarText(virat, rohit) {
  let v = {},
    r = {};
  for (let i = 0; i < virat.length; i++) {
    if(!v[virat[i]]){
        v[virat[i]] = 1;
    }else{
        v[virat[i]]++
    }
  }

  for(let i=0; i<rohit.length; i++){
    if(!r[rohit[i]]){
        r[rohit[i]]=1
    }else{
        r[rohit[i]]++
    }
  }
  let ans=0;
  for(let i in v){
    if(r[i]){
        if(Math.abs(r[i]-v[i])==0){
            ans+=r[i];
        }else{
            let min=Math.min(r[i],v[i]);
            ans+=min;
        }
    }
  }
  console.log(ans)
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let virat = input[0].trim();
  let rohit = input[1].trim();
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
