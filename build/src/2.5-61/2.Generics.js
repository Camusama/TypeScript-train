"use strict";
// 函数
// 尖括号类似于预先声明
function identity(arg, st) {
    console.log(arg, st);
    return arg;
}
identity(['123', '123'], '123');
// 函数泛型可以待传入时确定
function testTuple(arg) {
    return [arg[0], arg[1]];
}
console.log(testTuple([1000, 'str']));
// 对于接口泛型 定义时要指定一下
const objInt = {
    name: '123',
    // age: 456,
    age: '456',
};
console.log(objInt);
// 类泛型同理
class TestClass {
    constructor(a, b) {
        this.name = a;
        this.age = b;
    }
}
// 在使用时声明一下
const testccc = new TestClass(123, 444);
console.log(testccc);
//# sourceMappingURL=2.Generics.js.map