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
const obj = {
  foo: function () {
    console.log("this", this);
  },
};

obj.foo();
