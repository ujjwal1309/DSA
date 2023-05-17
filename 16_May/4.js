function mergeSort(arr, s, e) {
  if (s >= e) return;
  let m = Math.floor((s+e) / 2);
  mergeSort(arr, s, m);
  mergeSort(arr, m+1, e);
  merge(arr, s, e, m);
}

function merge(arr, s, e, m) {
  let temp = new Array(e - s + 1);
  let i = s,
    j = m+1,
    k = 0;
  while (i <= m && j <= e) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= m) temp[k++] = arr[i++];
  while (j <= e) temp[k++] = arr[j++];

  k = 0;

  for (let l = s; l <= e; l++) {
    arr[l] = temp[k++];
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  mergeSort(arr, (s = 0), (e = n - 1));
  console.log(arr.join(" "))
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`5
    3 5 0 9 8`);
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
