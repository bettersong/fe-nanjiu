

function createIterator(arr) {
    let nextIndex = 0

    return {
        next: function() {
            return nextIndex < arr.length ?
            {value: arr[nextIndex++], done: false} :
            {value: undefined, done: true}
        }
    }
}

let iterator = createIterator([1, 2, 3])

console.log(iterator.next())  // {value:1, done: false}
console.log(iterator.next())  // {value:2, done: false}
console.log(iterator.next())  // {value:3, done: false}
console.log(iterator.next())  // {value: undefined, done: true}

console.log('-------------')

// const obj = {
//     name: 'nanjiu',
//     hobby: 'fe'
// }
// let arr = [1,2,3]
// // console.log(obj[Symbol.iterator])
// // console.log(arr[Symbol.iterator])
// for(let v of arr) {
//     console.log(v)
// }
// let arrV = arr.values()
// console.log(arrV,'ss')
// for(let i=0; i<arrV.length; i++){
//     console.log('sss')
//     console.log(arrV[i])
// }

// 数组
let arr = ['nan', 'jiu', 'fe']
console.log('array',arr[Symbol.iterator])
for(let v of arr) {
    console.log(v)
}

// 字符串
let str = 'nanjiu'
console.log('string',str[Symbol.iterator])
for(let v of str) {
    console.log(v)
}

// set
let set = new Set(arr)
console.log('set',set[Symbol.iterator])
for(let v of set) {
    console.log(v)
}

// map
let map = new Map([
    ['name', 'nanjiu'],
    ['hobby', 'fe']
])
console.log('map',map[Symbol.iterator])
for(let v of map) {
    console.log(v)
}

// 类数组
function say() {
    console.log('类数组', arguments[Symbol.iterator])
    for(let v of arguments) {
        console.log(v)
    }
}
say('nanjiu', 'fe', '18')

let person = {
    name: 'nanjiu',
    age: 18,
    hobby: 'fe'
}

person[Symbol.iterator] = function() {
    return createIterator(Object.values(person))
}

for(let v of person) {
    console.log(v)
}
