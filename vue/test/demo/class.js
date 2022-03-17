class Person {
  constructor(name, age, sex) {
    this.name = name;
    const _age = age; // 私有属性：一般采用约定命名或闭包实现
    this._sex = sex;
    this._age = age;
    this.get_age = () => _age;
  }
  familyName = "111";
  say() {
    console.log(
      `I am ${this.name} and I am ${this.get_age()}----${this.familyName}`
    );
  }

  static run() {
    console.log("running~~"); // 静态方法，不会被实例继承，只能通过类来调用，子类会继承父类的静态方法
  }
}

class Man extends Person {
  constructor(name, age, sex, pop) {
    super(name, age, sex); // 调用父类的constructor(name,age,sex)
    this.pop = pop;
  }
}

const xiaoming = new Person("小明", 18);
console.log(xiaoming, xiaoming.name, xiaoming._age);
xiaoming.say();
Person.run();
// xiaoming.run();  //报错实例不能调用类的静态方法
Man.run();

const mike = new Man("mike", 20, "man");
console.dir(Man.prototype, 22);
console.log(mike.constructor === Man.prototype.constructor, 11); // true
