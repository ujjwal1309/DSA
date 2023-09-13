let s="07:05:45PM";

let p=s.slice(9,2);
let time=+(s.slice(0,2));
let r=s.slice(2,6);
if(p==="AM"){
    if(time===12){
         console.log("00"+r);
    }else{
        console.log(time+r)
    }
}else{
    time+=12;
    console.log(time+r)
}