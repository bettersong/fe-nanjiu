

async function fn(){
    (()=>{
        Promise.resolve(1)
    })()
}

console.log(fn())