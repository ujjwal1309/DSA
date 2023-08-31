function foo(arr, n) {
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let min = Math.min(arr[i], arr[j]);
      let p = min * (j-i);
      max = Math.max(max, p);
    }
  }
  console.log(max);
}

// this code is gonna take O(n^2)

//All things are achievable if i put the effort and time into it but how I have to get into job and i don;t know if i can be able to . What's the problem i am not disabled at all i can do anything which things are keep me away at focus , pokemon unite . If this happens how i am going to improve my lifestyle I lnow that i can do it. I want to get a ggo d job that's all my dream is to become a billionaire not a rotten shit that lies all day on bed.



function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    foo(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`1
    9
    1 8 6 2 5 4 8 3 7`);
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
//waise kl maine Re/Member dekhi
//Overall unique story thi bs thodi ending bakwaas thi pr maja aya

