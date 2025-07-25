const fs= require("fs");
console.log("start");
setImmediate(()=>{
    console.log("immediate 1")
})

setTimeout(()=>{
    console.log("timer 1")
},0)

fs.readFile("demo.txt","utf-8",(err,data)=>{
    if(err) return console.log(err);
    console.log(data);
    setTimeout(()=>{
        console.log("timer 2");
    })

    setImmediate(()=>{
        console.log("immediate 2");
    })

    process.nextTick(()=>{
        console.log("next tick 2");
    })
})

function fun(){
    console.log("fun");
}

fun();
console.log("end");

function mul(a,b){
    return new Promise((resolve,reject)=>{
        if(a>10) return resolve(a*b);
        reject("a is less than 10")
    })
}
mul(5,6).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
process.nextTick(()=>{
    console.log("next tick 1");
})