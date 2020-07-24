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
const obj = {
  foo() {
    console.log("reference", this);
  },
};

const f = obj.foo;
//call
//f();//this = window

//容易发生混乱的情景二：
//2.1 回调函数
const obj2 = {
  tags: [3, 4],
  foo() {
    this.tags.forEach((item) => {
      console.log(item, this);
    });
  },
};

//obj2.foo();
//2.2 箭头函数
//this = window;
const obj3 = {
  foo: function () {
    (() => {
      console.log("arrow", this);
    })();
  },
};

//obj3.foo(); //this = window
//容易发生混乱的情景三：
//3.1 ES5类
function Obj4() {
  this.tags = [3, 4];
}

Obj4.prototype.foo = function () {
  "use strict";
  this.tags.forEach(function callmehere(item) {
    console.log("es5: " + item, this);
  });
};

const obj4 = new Obj4();
//obj4.foo();
//3.2 ES6类

class Obj5 {
  constructor() {
    this.tags = [3, 4];
  }
  foo() {
    this.tags.forEach((item) => {
      console.log("es6: " + item, this);
    });
  }
}

const obj5 = new Obj5();
//obj5.foo();
//容易发生混乱的情景四：addEventListener
const button = document.getElementById("#button");
// button.addEventListener("click", function () {
//   console.log(this);
// });

//自定义button
class colorButton {
  constructor() {
    this.colors = ["red", "yellow", "green"];
    this.index = 0;
    this.btn = document.createElement("BUTTON");
    this.btn.innerText = "color";
  }

  render() {
    document.getElementById("container").appendChild(this.btn);

    button.addEventListener("click", () => {
      let color = this.colors[this.index % 3];
      this.btn.innerText = color;
      this.btn.style.backgroundColor = color;
      this.index += 1;
    });
  }
}

const colorbtn = new colorButton();
//colorbtn.render();

//什么是上下文
var aValue = "Oops Global!";
function aFunc() {
  console.log(this.aValue);
}

aFunc();
