let s="12:05:45AM";



let p=s.slice(2);

let t=s.slice(0,-2).split(":")

console.log(p,t)
// console.log(p)
// let time=+(s.slice(0,2));
// console.log(time)
// let r=s.slice(2,8);
// if(p==="AM"){
//     if(time==12){
//          console.log("00"+r);
//     }else{
//         console.log(time+r)
//     }
// }else{
//     time+=12;
//     console.log(time+r)
// }