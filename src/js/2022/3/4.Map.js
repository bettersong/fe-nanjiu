
const map = new Map([
    ['name', 'nanjiu'],
    ['age', 18],
    ['hobby', 'FE']
])
console.log(map)
console.log(map.size) //3

console.log('set', map.set([1], 'set[1]')) //  {'name' => 'nanjiu', 'age' => 18, 'hobby' => 'FE', Array(1) => 'set[1]'}
console.log('get', map.get('name')) // nanjiu
console.log('has', map.has('age')) // true
console.log('delete', map.delete('age')) // true
console.log('clear', map.clear()) // undefined


{
    const map = new Map([
        ['name', 'nanjiu'],
        ['age', 18],
        ['hobby', 'FE']
    ])
    
    for(let key of map.keys()) {
        console.log('key',key)
        /**
         * key name
         * key age
         * key hobby
         */
    }

    for(let value of map.values()) {
        console.log('value', value)
        /**
         * value 'nanjiu'
         * value 18
         * value 'FE'
         */
    }

    for(let entry of map.entries()) {
        console.log('entry', entry)
        /**
         * entry ['name', 'nanjiu']
         * entry ['age', 18]
         * entry ['hobby', 'FE']
         */
    }

    map.forEach((item, index) => {
        console.log('forEach', item, index)
        /**
         * forEach 'nanjiu' 'name'
         * forEach 18 'age'
         * forEach 'FE' 'hobby'
         */
    })

    console.log(Map.prototype[Symbol.iterator] === Map.prototype.entries) //true

    for(let m of map) {
        console.log('for...of', m)
        /**
         * for...of ['name', 'nanjiu']
         * for...of ['age', 18]
         * for...of ['hobby', 'FE']
         */
    }
}