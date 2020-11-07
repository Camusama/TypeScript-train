// .d.ts。描述 JavaScript 库和模块信息的声明文件
// 就可以借用 TypeScript 的各种特性来使用库文件了。
// 声明合并
declare function jQuery(selector: string): any
declare namespace jQuery {
  function ajax(url: string, settings?: any): void
}
// function tset(str: string): any
