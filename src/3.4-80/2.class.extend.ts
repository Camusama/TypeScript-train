/* eslint-disable max-classes-per-file */
namespace classextend {
  // 接口描述类公共部分，非私有

  export interface aniInterface {
    name: string
    bark(str: any): any
  }
  class Animal implements aniInterface {
    name: string

    constructor(name: string) {
      this.name = name
    }

    // 可选
    bark(str: string) {
      console.log(this.name, 'bark', str)
      return false
    }
  }

  export class Dog extends Animal {
    // constructor(name: string) {
    //   super(name)
    // }
    // 可以不创建构造函数，这样的话子类的构造延用父类
    bark(str = 'ddog') {
      console.log('dog bark', this.name)
      // 调用父属性的函数
      super.bark(str)
      return false
    }
  }
  export class Horse extends Animal {
    foot: string

    // 当子类构造函数和父类不一样时还是要写，
    // 注意：子类构造函数内第一句代码必须是super();
    constructor(name: string, foot = 'hfoot') {
      super(name)
      this.foot = foot
    }

    bark(str = 'hhor') {
      console.log('horse bark', this.name)
      super.bark(str)
      return true
    }
  }
}
const ndog = new classextend.Dog('pdog')
const nhorse = new classextend.Horse('phorse')
console.log('111', ndog.name, nhorse.name, nhorse.foot)
createSquare({ a: '123', b: 333, x: 1, y: 2 })
ndog.bark('ddd')
nhorse.bark('hhh')
