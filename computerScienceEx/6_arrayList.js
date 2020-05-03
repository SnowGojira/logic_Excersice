//自己创建一个Array对象
//包含push，pop，delete，get方法

class ArrayList {
  constructor() {
    this.length = 0;
    this.value = {};
  }

  push(value) {
    this.value[this.length] = value;
    this.length += 1;
  }

  pop() {
    delete this.value[this.length - 1];
    this.length -= 1;
    //this.delete(this.length-1)
  }

  get(index) {
    return this.value[index];
  }

  delete(index) {
    delete this.value[index];
    this._collapseTo(index);
  }
  //删除某元素后前移，shift
  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.value[index] = this.value[index + 1];
    }

    delete this.value[this.length - 1];
    this.length -= 1;
  }
}

let array = new ArrayList();

array.push("1");
array.push("2");
array.push("3");
array.push("4");
array.delete(2);
console.log(array);
