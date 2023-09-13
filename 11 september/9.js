let arr = [-4, 3, -9, 0, 4, 1];

let n=6;

let obj={
    "1":0,
    "-1":0,
    "0":0
};


for(let i of arr){
    if(i<0){
        obj["-1"]++
    }else if(i===0){
        obj["0"]++
    }else{
        obj["1"]++
    }
}

console.log(obj)

// for(let i in obj){
//     let a=obj[i]/arr.length
//     obj[i]=a.toFixed(6)
// }

//     for(let i in obj){
//         console.log(obj[i])
// }
