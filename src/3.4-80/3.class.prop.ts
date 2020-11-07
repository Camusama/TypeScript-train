/* eslint-disable max-classes-per-file */
// 接口描述类公共部分，非私有
// 可以注意到 命名空间问题 aniInterface
// 使用命名空间
class Cat implements classextend.aniInterface {
  // 私有属性 一般下划线开头
  private priCatmimi: string

  // 只读属性，只能在声明时或构造里初始化
  readonly ceye: string

  readonly neko: string = 'mimimi'

  constructor(name: string, ceye = 'blueeye') {
    this.priCatmimi = name
    this.ceye = ceye
  }

  // get set 以属性（非函数）访问
  get catmimi() {
    return this.priCatmimi
  }

  set catmimi(str: string) {
    this.priCatmimi = str
  }
}
const mcat = new Cat('mimi')
// Property 'priCatmimi' is private and only accessible within class 'Cat'
// console.log(mcat.priCatmimi)
mcat.catmimi = 'setcatMIMI'
console.log(mcat.catmimi, mcat.ceye, mcat.neko)
