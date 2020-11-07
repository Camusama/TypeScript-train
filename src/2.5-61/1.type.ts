let a: number = 1
let str: string = '12313'
let arr: number[] = [1, 2, 3, 45, 5]
// 元组tuple内也要一个个的,数目要对得上
const arr2: [number, string, string] = [1, '2', '123']

// 只 写red=1  后面自动递增 2 ，3
// 不写第一个默认为0
enum color {
  red = 1,
  blue,
  green,
}
let col: color = color.green
// string要初始化
enum Type {
  aa = '123',
  b = '123ff',
  c = '15215',
}
// const type: Type = Type.a
// const 完全嵌入枚举， 生成js里没有新建对象，直接编译
const enum constType {
  asdf = '2313',
}
let aaa: any = '12311123'
const bbbb: constType = constType.asdf
console.log(bbbb)
a = 123
aaa = '123'
str = '123'
arr = []
// arr2 = [1, 2, 3]
col = 5
// 定义函数类型
function tset(str: string): any

// const tsttype = '123'
// 参数如果声明为enum  调用时只能取定义的enum
function tsetType(ty: string) {
  console.log(ty in Type)
}
tsetType(Type.b)

// 2.
let bbb: any = 1
bbb = '!23'
console.log(bbb)
// 7.
type s = string
let teststr: s
// undefined
const res = typeof teststr
console.log('typeof', res)
