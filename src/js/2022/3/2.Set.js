
const obj = {name: 'nanjiu'}
const set = new Set([1,2,3,obj])
console.log(set.size)  //4

console.log('delete', set.delete(3), set) // true {1,2,{name:'nanjiu'}}
console.log('delete', set.delete({name: 'nanjiu'}), set) // false {1,2,{name:'nanjiu'}}
console.log('delete', set.delete(obj), set) // true {1,2}

console.log('add', set.add(6), set.size) //  {1, 2, 6}, 3
console.log('add', set.add({name: 'FE'})) // {1, 2, 6, {name: 'FE'}}
console.log('add', set.add(obj)) // {1, 2, 6, {name: 'FE'}, {name: 'nanjiu'}}


console.log('has', set.has(1)) // true
console.log('has', set.has(obj)) // true
console.log('has', set.has({name: 'FE'})) // false

console.log('--------------------')

console.log(set)
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values) // true

const mySet = new Set([1, 2, 'nanjiu', [3], {age: 18}])
console.log('keys', mySet.keys()) // SetIterator {1, 2, 'nanjiu', [3], {age: 18}}
console.log('values', mySet.values()) // SetIterator {1, 2, 'nanjiu', [3], {age: 18}}
console.log('entries', mySet.entries()) // SetIterator SetIterator {1 => 1, 2 => 2, 'nanjiu' => 'nanjiu', Array(1) => Array(1), {…} => {…}}

for(let v of mySet) {
    console.log(v) // 1, 2, 'nanjiu', [3], {age:18}
}
mySet.forEach((item,index) => {
    console.log(item, index)
    /**
     * 1 1
     * 2 2
     * 'nanjiu' 'nanjiu'
     * [3] [3]
     * {age: 18} {age: 18}
     */
})

// 判断元素是否相等，与===类似，主要区别是NaN
let newSet = new Set([NaN,+0,-0,undefined,null,{}])
console.log('------', newSet)
console.log(newSet.add(NaN)) // {NaN, 0, undefined, null, {}}
console.log(NaN === NaN) // false
console.log(newSet.has(NaN)) // true


console.log(+0 === -0, newSet.add(-0)) // true {NaN, 0, undefined, null, {}}
console.log(undefined === undefined, newSet.add(undefined)) // true {NaN, 0, undefined, null, {}}
console.log(null === null, newSet.add(null)) // true {NaN, 0, undefined, null, {}}}
console.log({} === {}, newSet.add({})) // false {NaN, 0, undefined, null, {}}, {}}


let s = new Set('nanjiu')
console.log(s)
const boy = {name: 'nanjiu'}
const arr = [1,2,3,2,4,boy,1,6,boy]
console.log([...new Set(arr)]) //[1, 2, 3, 4, {…}, 6]

{
    const set = new Set([1,2,3,4,5])
    const arr = Array.from(set) // [1,2,3,4,5]
    console.log(arr)
}

{
    const arr1 = [1,2,3,4,5,6]
    const arr2 = [3,4,5,6,7,8]

    const mergeArr = [...new Set([...arr1,...arr2])]
    console.log(mergeArr) //  [1, 2, 3, 4, 5, 6, 7, 8]
}
{
    const arr1 = [1,2,3,4,5,6]
    const arr2 = [3,4,5,6,7,8]

    const overlapArr = [...new Set(arr1)].filter(item => {
        return new Set(arr2).has(item)
    })
    console.log(overlapArr)
}
{
    const arr1 = [1,2,3,4,5,6]
    const arr2 = [3,4,5,6,7,8]

    const diffArr = [...new Set(arr1)].filter(item => {
        return !new Set(arr2).has(item)
    })
    console.log(diffArr)
}