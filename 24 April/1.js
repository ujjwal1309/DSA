function firstBigger(arr,n,qrr,q){

    for(let i of qrr){
        let ans=Infinity;
        for(let j of arr){
            if(j>i){
                ans=Math.min(ans,j);
            }
        }
        if(ans===Infinity){
            console.log(-1)
        }else{
            console.log(ans)
        }
    }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let q = +input[2];
  let qrr = [];
  let line = 3;
  for (let i = 0; i < q; i++) {
    qrr.push(+input[line++]);
  }

  firstBigger(arr,n,qrr,q)
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`10
13 89 81 66 81 63 71 76 73 81
2
65
15
`);
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
