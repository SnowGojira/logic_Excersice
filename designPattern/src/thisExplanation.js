//总结出this的新的规律
//规律一 function里面的this = window

// console.log("global", this);
// function foo() {
//   console.log("function", this);
// }
// foo();

//规律二 函数的严格模式下，this = undefined

// function foo() {
//   "use strict";
//   console.log("strict function", this);
// }
// foo();

//规律三 对象里面的method里的 this = obj

// const obj = {
//   foo: function () {
//     console.log("this", this);
//   },
// };

// obj.foo();

//////////造成混乱的根源////////////
//容易发生混乱的情景一：函数地址

//容易发生混乱的情景二：
//2.1 回调函数
//2.2 箭头函数

//容易发生混乱的情景三：
//3.1 ES5类
//3.2 ES6类

//容易发生混乱的情景四：addEventListener
