// 函数
// 尖括号类似于预先声明
function identity<T>(arg: T[], st?: T): T[] {
  console.log(arg, st)
  return arg
}
identity(['123', '123'], '123')
// 函数泛型可以待传入时确定
function testTuple<T, K>(arg: [T, K]): [T, K] {
  return [arg[0], arg[1]]
}
console.log(testTuple([1000, 'str']))
// 接口
interface testInter<T> {
  name: T
  age: T
}
// 对于接口泛型 定义时要指定一下
const objInt: testInter<string> = {
  name: '123',
  // age: 456,
  age: '456',
}
console.log(objInt)

// 类泛型同理
class TestClass<T> {
  name: T

  age: T

  constructor(a: T, b: T) {
    this.name = a
    this.age = b
  }
}
// 在使用时声明一下
const testccc = new TestClass<number>(123, 444)
console.log(testccc)
