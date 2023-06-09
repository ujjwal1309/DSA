function rotateArr(arr,n,k){
    k=k%n;

    let ans=new Array(n);

    for(let i=0; i<n; i++){
        let index=(i+k)%n;
        ans[index]=arr[i]
    }

    console.log(ans.join(" "))
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let x = input[line++].trim().split(" ").map(Number);
    let n = x[0],
      k = x[1];
    let arr = input[line++].trim().split(" ").map(Number);
    rotateArr(arr,n,k)
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`3
    2 1
    1 2
    2 2
    1 2
    3 1
    1 2 3`);
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
