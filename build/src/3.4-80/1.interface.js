"use strict";
function createSquare(config) {
    const obj = { color: 'red', width: 10 };
    Object.assign(obj, config);
    return obj;
}
const newsq = createSquare({
    color: 'blue',
    x: 1,
    y: 2,
    // 定义额外属性后
    test: 1,
    sss: 2,
    fff: 3,
});
console.log(newsq);
const ttfn = function (fsdf, gga) {
    console.log('tfunc', fsdf, gga);
    return true;
};
ttfn('1', 2);
const arrT = ['bob', 'tom', 32313];
console.log('strArr', arrT[1], arrT[0], arrT[2]);
// 新写法
const objAAA = {
    size: 543,
};
// 因为继承了 所以objAAA[1]不报错
console.log(objAAA.size, objAAA[1]);
//# sourceMappingURL=1.interface.js.map