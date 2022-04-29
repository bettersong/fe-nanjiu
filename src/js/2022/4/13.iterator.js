

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