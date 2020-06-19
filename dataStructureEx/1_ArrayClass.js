//创建一个dynamicArray类
//1.insert：执行insert，插入元素
//2.indexOf：执行indexOf(item),返回索引，如果没有返回-1
//3.removeAt: 执行removeAt(index),删除位于index上的元素，没有删除返回-1

class Array {
  //step1 创建构造器
  constructor() {
    this.length = 0;
    this.arrayObj = {};
  }

  insert(value) {
    this.arrayObj[this.length] = value;
    this.length += 1;
  }

  indexOf(value) {
    for (let i in this.arrayObj) {
      if (this.arrayObj[i] == value) {
        return i;
      }
    }

    return index;
  }

  removeAt(index) {
    //验证index在不在合理的范围内
    if (index < 0 || index >= this.length) {
      throw new Error("the index is out of range!");
    }
    //重新排位：在index后面的元素前移
    //例如：[1,2,3] 删除元素1
    for (let i = index; i < this.length; i++) {
      this.arrayObj[i] = this.arrayObj[i + 1];
    }
    //此时为[2,3,undefined]
    delete this.arrayObj[this.length - 1];
    //删除之后为[2,3]
    this.length -= 1;
  }
}

var array = new Array();
array.insert(10);
array.insert(20);
array.insert(30);

console.log(array);
console.log(array.indexOf(30));

array.removeAt(1);
console.log(array);
