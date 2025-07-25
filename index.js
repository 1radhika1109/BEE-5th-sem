console.log("hello")
function delay()
{
    let currenttime=new Date().getTime()
    while(new Date().getTime()-currenttime <4000)
    {

    }
    console.log("delay done")
}

setTimeout(delay,0)
console.log("bye")
function sum(a,b)
{
    console.log(a+b)
}
sum(2,3);
sum(4,5);

// create a function which return promise to multiply two number a and b if a>10

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