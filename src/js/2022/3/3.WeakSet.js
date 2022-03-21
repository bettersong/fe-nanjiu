

const per = {name: 'nanjiu'}
const per2 = {name: 'WeakSet'}
const ws = new WeakSet([{}, per])

console.log('add', ws.add(per2))
console.log('delete', ws.delete({})) // false
console.log('delete', ws.delete(per2)) // true
console.log('has', ws.has(per)) // true
console.log(ws) // {{…}, {…}}

console.log('------------------')

{
    let person = {name: 'nanjiu'}
    let person2 = {name: 'weakset'}
    const ws = new WeakSet([person2])
    ws.add(person)
    // console.log(ws)
    // 我们把person引用清空看一下
    person = null
    console.log(ws)
}