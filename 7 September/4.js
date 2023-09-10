let bag=""

for(let i=0; i<30; i++){
    bag+=".";
    console.log(bag)
}

for(let i=29; i>=0; i--){
    bag=bag.slice(0,i);
    console.log(bag)
}