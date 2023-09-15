function foo(arr,n){
    let obj={
        "5":0,
        "10":0,
        "20":0
    }

    for(let i of arr){
        obj[i]++;
        if(i===10){
            if(!obj["5"]){
                return "NO"
            }

            obj["5"]--
        }else if(i===20){
            if(obj["10"]){
                obj["10"]--;
                if(!obj["5"]){
                    return "NO"
                }
                obj["5"]--
            }else if(obj["5"]){
                if(obj["5"]<3){
                    return "NO"
                }

                obj["5"]-=3
            }else{
                return "NO";
            }
        }
    }

    return "YES"
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        console.log(foo(arr,n));
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    5
    5 5 5 10 20
    5
    5 5 10 10 20`);
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
      process.exit(0) ;
    });
  }