"use strict";
class ArrayIterator {
    constructor(arr) {
        this.arr = arr;
        this.index = 0;
    }
    hasNext() {
        if (this.index < this.arr.length) {
            return true;
        }
        this.index = 0;
        return false;
    }
    next() {
        let exchane = this.index;
        for (let i = exchane; i < this.arr.length; i++) {
            if (this.arr[i] < this.arr[exchane]) {
                exchane = i;
            }
        }
        ;
        [this.arr[this.index], this.arr[exchane]] = [this.arr[exchane], this.arr[this.index]];
        return this.arr[this.index++];
    }
    getIndex() {
        return this.index;
    }
}
const arr1 = [10, 2, 1, 3, 5, 7, 9];
const arrayIterator = new ArrayIterator(arr1);
while (arrayIterator.hasNext()) {
    // console.log(arrayIterator.next())
    arrayIterator.next();
}
console.log(arr1);
//# sourceMappingURL=4itorator.js.map