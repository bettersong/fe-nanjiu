
class Person {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }
  getName() {
    return this.name;
  }
}

const xiaoMing = new Person('小明');

console.log(xiaoMing.getName());

