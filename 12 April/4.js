let arr = ["cba", "bzaaa"];

arr[0].split("");

console.log(arr)

for (let i of arr) {
    i=i.split("");
  i.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(i)
}


