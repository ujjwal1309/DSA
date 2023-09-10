let n=10

for(let i=0; i<n; i++){
    let bag="";
    for(let j=0; j<n; j++){
        if(i==0 || i==n-1){
            bag+="*";
        }else{
            if(j==0 || j==n-1){
                bag+="*"
            }else{
                bag+=" "
            }
        }
    }
    console.log(bag)
}