const primes = []

// 1-1000, 素数 
function getPrimes(n) {
    
    for(let i=1; i<=n; i++) {
        if(isPri(i)){
            primes.push(i)
        }
    }
    function isPri(k) {
        let num = 0
        for(let i=1; i<=k; i++) {
            if(k%i == 0) {
                num++
            }
        }
        if(num<=2) {
            return true
        }
        return false
        // num = 0
    }
    // console.log(primes)
}

// getPrimes(1000)

// console.log(primes)

console.log(1)

setTimeout(()=>{
    console.log(2)
},0)

Promise.resolve().then(res => {
    console.log(3)

    setTimeout(() => {
        console.log(5)
    }, 200)

    Promise.resolve().then(res => {
        console.log(6)
    })
})

setTimeout(() => {
    console.log(4)
},100)
// 1,3,6,2,4,5