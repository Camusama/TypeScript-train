// 迭代器必须实现hasnext和next
interface Iterator<T> {
  hasNext(): boolean
  next(): T
}
class ArrayIterator implements Iterator<any> {
  private arr: Array<any>

  private index: number

  constructor(arr: Array<any>) {
    this.arr = arr
    this.index = 0
  }

  hasNext() {
    if (this.index < this.arr.length) {
      return true
    }
    this.index = 0
    return false
  }

  next() {
    let exchane = this.index
    for (let i = exchane; i < this.arr.length; i++) {
      if (this.arr[i] < this.arr[exchane]) {
        exchane = i
      }
    }
    ;[this.arr[this.index], this.arr[exchane]] = [this.arr[exchane], this.arr[this.index]]

    return this.arr[this.index++]
  }

  getIndex() {
    return this.index
  }
}
const arr1: number[] = [10, 2, 1, 3, 5, 7, 9]

const arrayIterator = new ArrayIterator(arr1)

while (arrayIterator.hasNext()) {
  // console.log(arrayIterator.next())
  arrayIterator.next()
}
console.log(arr1)
