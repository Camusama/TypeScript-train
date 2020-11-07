"use strict";
/* eslint-disable max-classes-per-file */
// 接口描述类公共部分，非私有
// 可以注意到 命名空间问题 aniInterface
// 使用命名空间
class Cat {
    constructor(name, ceye = 'blueeye') {
        this.neko = 'mimimi';
        this.priCatmimi = name;
        this.ceye = ceye;
    }
    // get set 以属性（非函数）访问
    get catmimi() {
        return this.priCatmimi;
    }
    set catmimi(str) {
        this.priCatmimi = str;
    }
}
const mcat = new Cat('mimi');
// Property 'priCatmimi' is private and only accessible within class 'Cat'
// console.log(mcat.priCatmimi)
mcat.catmimi = 'setcatMIMI';
console.log(mcat.catmimi, mcat.ceye, mcat.neko);
//# sourceMappingURL=3.class.prop.js.map