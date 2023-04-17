function tallestAround(arr, n) {
  let s=[];
  let ans=[];
  for(let i=n-1; i>=0; i--){
    while(s.length && s[s.length-1]<=arr[i]){
        s.pop();
    }

    s.length ? ans.push(s[s.length-1]) : ans.push(-1);

    s.push(arr[i]);
  }

  ans.reverse();

  for(let i=n-1; i>=0; i--){
    if(ans[i]===-1){
        while(s.length && s[s.length-1]<=arr[i]){
            s.pop();
        }

        if(s.length){
            ans[i]=s[s.length-1];
        }
    }
  }

  console.log(ans.join(" "))
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    tallestAround(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    3
    1 2 1
    5
    1 2 3 4 3`);
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
