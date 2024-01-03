let arr = [2, 7, 11, 15];

function twoSum(arr, t) {
  let mp = new Map();

  for (let i = 0; i < arr.length; i++) {
    let d = t - arr[i];

    if (mp.has(d)) {
      return [mp.get(d), i];
    }

    mp.set(arr[i], i);
  }
}

console.log(8889%10);

//The time complexity of this is O(n)
