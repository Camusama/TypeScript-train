"use strict";
let a = 1;
let str = '12313';
let arr = [1, 2, 3, 45, 5];
// 元组tuple内也要一个个的,数目要对得上
const arr2 = [1, '2', '123'];
// 只 写red=1  后面自动递增 2 ，3
// 不写第一个默认为0
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
    color[color["green"] = 3] = "green";
})(color || (color = {}));
let col = color.green;
// string要初始化
var Type;
(function (Type) {
    Type["aa"] = "123";
    Type["b"] = "123ff";
    Type["c"] = "15215";
})(Type || (Type = {}));
let aaa = '12311123';
const bbbb = "2313" /* asdf */;
console.log(bbbb);
a = 123;
aaa = '123';
str = '123';
arr = [];
// arr2 = [1, 2, 3]
col = 5;
// const tsttype = '123'
// 参数如果声明为enum  调用时只能取定义的enum
function tsetType(ty) {
    console.log(ty in Type);
}
tsetType(Type.b);
// 2.
let bbb = 1;
bbb = '!23';
console.log(bbb);
let teststr;
// undefined
const res = typeof teststr;
console.log('typeof', res);
//# sourceMappingURL=1.type.js.map