
// node 模块化

const obj = {name:'song',gender:'man',a:12,b:24}

function add(){
    return this.a+this.b
}
module.exports = {obj,add}
console.log(module)