"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    // 可选
    bark(str) {
        console.log(this.name, 'bark', str);
        return false;
    }
}
class Dog extends Animal {
    // constructor(name: string) {
    //   super(name)
    // }
    // 可以不创建构造函数，这样的话子类的构造延用父类
    bark(str = 'ddog') {
        console.log('dog bark', this.name);
        // 调用父属性的函数
        super.bark(str);
        return false;
    }
}
class Horse extends Animal {
    // 当子类构造函数和父类不一样时还是要写，
    // 注意：子类构造函数内第一句代码必须是super();
    constructor(name, foot = 'hfoot') {
        super(name);
        this.foot = foot;
    }
    bark(str = 'hhor') {
        console.log('horse bark', this.name);
        super.bark(str);
        return true;
    }
}
const ndog = new Dog('pdog');
const nhorse = new Horse('phorse');
console.log('111', ndog.name, nhorse.name, nhorse.foot);
ndog.bark('ddd');
nhorse.bark('hhh');
//# sourceMappingURL=2.class.js.map