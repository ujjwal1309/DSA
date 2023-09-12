let arr=[1,2,3,4,5];
let n=5;
let p=arr[0];
let k=3;
// for(let i=1; i<n; i++){
//     let temp=arr[i];
//     arr[i]=p;
//     p=temp;
// }

// arr[0]=p;

// k=k%n;
// let ans=[];

// for(let i=0; i<n; i++){
//     let index=(i+k)%n;
//     ans[index]=arr[i];
// }

// console.log(ans)

for(let i=0; i<k; i++){
    let f=arr[0], l=arr[n-1];
    arr[0]=l,arr[n-1]=f;

}

console.log(arr)