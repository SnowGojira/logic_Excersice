var a = "Opps Global!";

function foo() {
  console.log(this.a);
}
//情况一
//foo();

let obj = {
  a: 2,
  tags: [3, 4],
  foo: foo,
  baz() {
    this.tags.forEach(function (item) {
      this.foo();
    });
  },
};
//情况二
//obj.foo();
//情况三
//obj.baz();

function Obj() {
  this.a = 2;
  this.tags = [3, 4];
}

Obj.prototype.foo = foo;
Obj.prototype.baz = function () {
  this.tags.forEach(function (item) {
    this.foo();
  });
};

const obj2 = new Obj();
//情况四
//obj2.foo();
//obj2.baz();

class OBJ {
  constructor() {
    this.a = 2;
    this.tags = [3, 4];
    this.foo = foo;
  }

  baz() {
    this.tags.forEach(function (item) {
      console.log(this);
    });
  }
}

//情况五
const obj3 = new OBJ();
//obj3.foo();
obj3.baz();

//情况六
setTimeout(obj.foo, 100);
//情况七
const button = document.getElementById("#button");
button.addEventListener("click", function () {
  console.log(this);
});

class Clicker {
  constructor(element) {
    this.element = element;

    this.element.addEventListener("click", () => {
      console.log(this.element);
    });
  }
}

const clicker = new Clicker(button);
