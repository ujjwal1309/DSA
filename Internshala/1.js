let arr = [2, 7, 11, 15];

function twoSum(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      if (arr[i] + arr[j] === t) {
        console.log(i, j);
        return;
      }
    }
  }
}

twoSum(arr,9);

//The time complexity of this is O(n^2)
