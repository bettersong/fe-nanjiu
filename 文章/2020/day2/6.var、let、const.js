
// console.log(s_name) // undefined
// var s_name = '南玖'

// function sayName() {
//     s_name = '南玖'
//     console.log(s_name) // '南玖'
//   }
// sayName()
// console.log(window.s_name) // ‘南玖

// {
//     let s_name = 'nanjiu'
//     var age = 18
// }
// //   console.log(s_name) // 报错
//   console.log(age) //18

// let 暂时性死区
// var name = 'nanjiu'
// {
//   console.log(name) // 报错
//   let name = '南玖'
// }

// 重复声明

// function say (name) {
//     let name
//   }

//   const PI = 3.14
// PI // 3.14

// PI = 3 // 报错

// 变量提升、暂时性死区
// var
// console.log(name1)  // undefined
// var name1 = 'xiaoming'

// // let 
// console.log(name2)  // Cannot access 'name2' before initialization
// let name2 = 'xiaohong'

// // const
// console.log(name3)  // Cannot access 'name3' before initialization
// const name3 = 'xiaobai'

// 块级作用域
// {
//     var name1 = 'xiaoming'
// }
// console.log(name1) // 'xiaoming'
// {
//     let name2 = 'xiaohong'
// }
// console.log(name2) // 报错 Uncaught ReferenceError: name2 is not defined
// {
//     const name3 = 'xiaobai'
// }
// console.log(name3) //报错 Uncaught ReferenceError: name3 is not defined

// 重复声明

// // var
// var name1 = 'xiaoming'
// var name1 = 'xiaoming2' //xiaoming2

// //let 
// {
//     let name2 = 'xiaohong'
//     let name2 = 'xiaohong2' //报错
// }

// //const
// {
//     const name3 = 'xiaobai'
//     const name3 = 'xiaobai' // 报错
// }

// 修改变量
// var
// var name1 = 'xiaoming'
// var name1 = 'xiaoming2' //'xiaoming2'

// //let 
// {
//     let name2 = 'xiaohong'
//     name2 = 'xiaohong2' // 'xiaohong2'
// }

// //const
// {
//     const name3 = 'xiaobai'
//     name3 = 'xiaobai2' // 报错
// }

// var s_name = 'nanjiu'
// function say() {}
// console.log(window.s_name) // 'nanjiu'
// console.log(window.say) // ƒ say() {}

// let s_name2 = 'nanjiu'
// const age = 18
// class Person{}
// console.log(window.s_name2) // undefined
// console.log(window.age) // undefined
// console.log(window.Person) // undefined

var age = 20
let s_name2 = '南玖'
const gender = 'man'
{
    let gzh = '前端南玖'
    debugger
}
