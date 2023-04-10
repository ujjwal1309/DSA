function rotateElement(arr, n) {
    let right=0,down=n-1,left=n-1,up=0;

  for(let i=0; i<Math.ceil(n/2); i++){
    let temp=arr[right][up];
    for(let i=up; i<=down; i++){
        let temp2=arr[right][i];
        arr[right][i]=temp;
        temp=temp2;
    }
    right++;
    for(let i=right; i<=down; i++){
        let temp2=arr[i][down];
        arr[i][down]=temp;
        temp=temp2
    }
    down--;
    for(let i=down; i>=up; i--){
        let temp2=arr[left][i];
        arr[left][i]=temp;
        temp=temp2;
    }
    left--;
    for(let i=left; i>=right; i--){
        let temp2=arr[i][up];
        arr[i][up]=temp;
        temp=temp2;
    }
    up++;

    arr[right-1][up-1]=temp
  }
  printArr(arr,n)
}

function printArr(arr,n){
    for(let i=0; i<n; i++){
        let ans="";
        for(let j=0; j<n; j++){
            ans+=arr[i][j]+" ";
        }
        console.log(ans);
    }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = input[i + 1].trim().split(" ").map(Number);
  }
  rotateElement(arr, n);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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
