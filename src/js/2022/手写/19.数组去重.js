
// f1 利用set

let arr = [1,2,3,2,4,5,3,6,2]
function arrayToHeavy1(arr) {
    return [...new Set(arr)]
}
console.log(arrayToHeavy1(arr)) //[ 1, 2, 3, 4, 5, 6 ]

// f2 for + indexOf
function arrayToHeavy2(arr) {
    let newArr = []
    for(let i=0; i<arr.length; i++) {
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(arrayToHeavy2(arr)) //[ 1, 2, 3, 4, 5, 6 ]

// f3 filter

function arrayToHeavy3(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) == index
    })
}

console.log(arrayToHeavy3(arr)) //[ 1, 2, 3, 4, 5, 6 ]

// f4 map

function arrayToHeavy4(arr) {
    let map = new Map()
    for(let i=0; i<arr.length; i++) {
        if(!map.has(arr[i])){
            map.set(arr[i], 1)
        }
    }
    return [...map.keys()]
}
console.log(arrayToHeavy4(arr)) //[ 1, 2, 3, 4, 5, 6 ]

// f5 include
function arrayToHeavy5(arr) {
    let res = []
    for(let i=0; i<arr.length; i++) {
        if(!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
console.log(arrayToHeavy5(arr)) //[ 1, 2, 3, 4, 5, 6 ]
