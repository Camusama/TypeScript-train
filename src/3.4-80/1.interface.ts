interface square {
  color?: string
  // 可选属性
  width?: number
  // 只读属性
  // interface只读属性只能赋值一次（不能在定义时赋值），之后无法改变
  readonly x: number
  readonly y: number
  // 额外属性，通过此定义让他可以有任意数量的其他属性
  // 同可索引 下面这句表示可通过某个字符串返回任何类型的内部值 如obj[str]
  [prop: string]: any
}
function createSquare(config: square) {
  const obj = { color: 'red', width: 10 }
  Object.assign(obj, config)
  return obj
}
const newsq = createSquare({
  color: 'blue',
  x: 1,
  y: 2,
  // 定义额外属性后
  test: 1,
  sss: 2,
  fff: 3,
})
console.log(newsq)
// interface只读属性只能赋值一次（不能在定义时赋值），之后无法改变
// newsq.x=3

// 函数类型
interface testfunc {
  // 函数  校验入参和返回值
  (a: string, b: number): boolean
}
const ttfn: testfunc = function (fsdf, gga) {
  console.log('tfunc', fsdf, gga)
  return true
}
ttfn('1', 2)

// 可索引类型 类似 arr[10] 通过某种索引访问
interface numArr {
  // 通过数字访问任何类型的返回值
  [index: number]: any
}
const arrT: numArr = ['bob', 'tom', 32313]
console.log('strArr', arrT[1], arrT[0], arrT[2])

// 接口继承
interface strArr extends numArr {
  [ind: string]: any
  size: number
}
// 新写法
const objAAA = <strArr>{
  size: 543,
}
// 因为继承了 所以objAAA[1]不报错
console.log(objAAA.size, objAAA[1])
