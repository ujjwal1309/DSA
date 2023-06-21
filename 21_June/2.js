function threeSum(arr, n) {
  arr.sort((a, b) => a - b);

    let s=new Set();

  for (let i = 0; i < n - 2; i++) {
    let j=i+1,k=n-1,t=-arr[i];
    while(j<k){
        let sum=arr[j]+arr[k]
        if(sum==t){
            if(s.has(`${arr[i]} ${arr[j]} ${arr[k]}`)){
                j++,k--
            }else{
                s.add(`${arr[i]} ${arr[j]} ${arr[k]}`)
            }
        }else if(sum<t){
            j++
        }else{
            k--
        }
    }
  }

  console.log(s.size)
  for(let i of s){
    console.log(i)
  }


}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    threeSum(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
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
    process.exit(0);
  });
}
