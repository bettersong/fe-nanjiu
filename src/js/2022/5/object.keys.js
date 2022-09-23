
const obj2 = {
    a: 'a',
    c: 'c',
    f: 'f',
    b: 'b',
}
console.log(Object.keys(obj2))

console.log('number', Object.keys('123'))
const obj = {}
obj[-1] = -1
obj[1] = 1
obj[1.1] = 1.1
obj['2'] = '2'
obj['c'] = 'c'
obj['b'] = 'b'
obj['a'] = 'a'
obj[2] = 2
obj[Symbol(1)] = Symbol(1)
obj[Symbol('a')] = Symbol('a')
obj[Symbol('b')] = Symbol('b')
obj['d'] = 'd'
console.log(Object.keys(obj))