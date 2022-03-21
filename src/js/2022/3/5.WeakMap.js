
const wm = new WeakMap([[{name:'11'},{}]])
console.log(wm)
const obj = {name: 'nanjiu'}
console.log('set', wm.set(obj, 1234)) // {{…} => 1234, {…} => {…}}
console.log('get', wm.get(obj)) // 1234
console.log('has', wm.has(obj)) // true
console.log('delete', wm.delete(obj)) //true



    const privateData = new WeakMap()

   export default class Student {
        constructor(name, age) {
            privateData.set(this, {name, age})
        }

        getName() {
            return privateData.get(this).name
        }

        getAge() {
            return privateData.get(this).age
        }
    }
