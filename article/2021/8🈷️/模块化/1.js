const module1 = require("./module")

console.log(module1.add.call(module1.obj))
console.log("---------------")
module.exports = module1;
console.log(module)