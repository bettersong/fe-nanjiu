// let foo = (name) => ({
//     name,
//     job: 'front end'
// })



// var foo2 = function (name) {
//     return {
//       name,
//       job: 'front end'
//     }
// }
// // console.log(foo2('南玖')) // 我是南玖

// function say() {
//     setTimeout(() => {
//       console.log('name:', this.name); // jiu
//     }, 100);
//     setTimeout(function(){
//         console.log('name:', this.name); // nan
//     }, 100);
// }
  
// var name = 'nan';
  
// say.call({ name: 'jiu' });

// var name = '南玖'
// var person = {
//     name: 'nanjiu',
//     say: function() {
//         console.log('say:',this.name)
//     },
//     say2: () => {
//         console.log('say2:',this.name)
//     }
// }

// // person.say.call({name:'小明'}) // say: nanjiu
// // person.say2.call({name:'小红'}) // say2: 南玖

// // person.say()
// // person.say2()
// function fn(name) {
//     console.log('fn:',new.target)
// }
// let fn2 = (name) => {
//     console.log('fn2')
// }


// new fn('nan')
// fn2('nan')
// // console.dir(fn)
// // console.dir(fn2)
// // fn2('nanjiu')
// // fn()

// // console.log(fn.prototype)
// // console.log(fn2.prototype)
// // const f = new fn('nanjiu')

// let fn3 = (a,...arr) => {
//     console.log(a,arr) //1, [2,3,4,5,6]
// }

// fn3(1,2,3,4,5,6)
// var obj = {
//     hi: function(){
//         console.log(this);
//         return ()=>{
//             console.log(this);
//         }
//     },
//     sayHi: function(){
//         return function() {
//             console.log(this);
//             return ()=>{
//                 console.log(this);
//             }
//         }
//     },
//     say: ()=>{
//         console.log(this);
//     }
// }
// class Foo {
//     name = "nan";
//     a() {
//       console.log(this.name);
//     }
//     b = function() {
//       console.log(this.name);
//     }
//     c = ()=> {
//       console.log(this.name);
//     }
// }

// let f = new Foo();
// let d = {name: "jiu", a: f.a, b: f.b, c: f.c};
// f.a(); // 'nan'
// f.b(); // 'nan'
// f.c(); // 'nan'

// d.a(); // 'jiu'
// d.b(); // 'jiu'
// d.c(); // 'nan'

var name = '南玖'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('nan')
var person2 = new Person('jiu')

person1.foo1() // 'nan'
person1.foo1.call(person2) // 'jiu'

person1.foo2() // 'nan'
person1.foo2.call(person2) // 'nan'

person1.foo3()() // '南玖'
person1.foo3.call(person2)() // '南玖'
person1.foo3().call(person2) // 'jiu'

person1.foo4()() // 'nan'
person1.foo4.call(person2)() // 'jiu'
person1.foo4().call(person2) // 'nan'


