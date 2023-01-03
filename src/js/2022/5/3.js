

const obj1 = {}, obj2 = {}
for(let i = 0; i < 1000000; i++) {
    obj1[i] = i
    obj2[i] = i
}

function fn1 () {
    console.time('jsonStringify')
    const res = JSON.stringify(obj1) === JSON.stringify(obj2)
    console.timeEnd('jsonStringify')
}

function fn2 () {
    console.time("for");
    const res = Object.keys(obj1).every((key) => {
        if (obj2[key] || obj2[key] === 0) {
          return true;
        } else {
          return false;
        }
      });
    console.timeEnd("for");
}
fn1()
fn2()


const obj = {
    name: '南玖',
    hobby: 'fe',
    age: 18,
    chinese: true
}

  console.log(JSON.stringify(obj))
  function myStringify(obj) {
    return `{"name":"${obj.name}","hobby":"${obj.hobby}","age":${obj.age},"chinese":${obj.chinese}}`
}

console.log(myStringify(obj) === JSON.stringify(obj))  // true

// const obj1 = {}, obj2 = {}
// for(let i = 0; i < 1000000; i++) {
//     obj1[i] = i
//     obj2[i] = i
// }
