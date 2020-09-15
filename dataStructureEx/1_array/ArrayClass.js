//创建一个dynamicArray类
//1.insert：执行insert，插入元素
//2.indexOf：执行indexOf(item),返回索引，如果没有返回-1
//3.removeAt: 执行removeAt(index),删除位于index上的元素
//4.max:得到数组最大值
//5.insertAt: 执行insertAt(value,index),在相应index位置上插入元素
//6.intersect: 执行arrayA.insertsect(arrayB),返回两者相同元素集合
//7.reverse: 反转array

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

    return -1;
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

  max() {
    let result = this.arrayObj[0];
    for (let i in this.arrayObj) {
      if (this.arrayObj[i] > result) {
        result = this.arrayObj[i];
      }
    }
    return result;
  }

  insertAt(value, index) {
    //验证index是否为有效值
    if (index < 0 || index >= this.length) {
      throw new Error("the index is out of range!");
    }
    //重新排位，在index之后的元素后移
    //例如：[1,2,3]在index=1处插入4

    for (let i = this.length - 1; i >= index; i--) {
      this.arrayObj[i + 1] = this.arrayObj[i];
    }
    //此时[1,2,2,3]
    this.arrayObj[index] = value;
    //此时[1,4,2,3]
    this.length += 1;
  }

  intersect(array) {
    let result = new Array();
    for (let i in this.arrayObj) {
      if (array.indexOf(this.arrayObj[i]) > 0) {
        result.insert(this.arrayObj[i]);
      }
    }
    return result;
  }

  reverse() {
    let result = new Array();

    for (let i = this.length - 1; i >= 0; i--) {
      result.insert(this.arrayObj[i]);
    }

    return result;
  }
}

///测试部分不要改动，所有console.log的结果为true
var array = new Array();
array.insert(10);
array.insert(20);
array.insert(30);
array.insert(40);

let arrayB = new Array();
arrayB.insert(50);
arrayB.insert(30);
arrayB.insert(10);

console.log(
  array.length == 4 &&
    array.arrayObj[0] == 10 &&
    array.arrayObj[1] == 20 &&
    array.arrayObj[2] == 30 &&
    array.arrayObj[3] == 40
);
console.log(array.indexOf(30) == 2);

array.removeAt(1);
console.log(
  array.length == 3 &&
    array.arrayObj[0] == 10 &&
    array.arrayObj[1] == 30 &&
    array.arrayObj[2] == 40
);

console.log(arrayB.max() == 50);
arrayB.insertAt(20, 2);
console.log(
  arrayB.length == 4 &&
    arrayB.arrayObj[0] == 50 &&
    arrayB.arrayObj[1] == 30 &&
    arrayB.arrayObj[2] == 20 &&
    arrayB.arrayObj[3] == 10
);
let arrayC = array.intersect(arrayB);
console.log(
  arrayC.length == 2 && arrayC.arrayObj[1] == 30 && arrayC.arrayObj[0] == 10
);

let arrayD = arrayB.reverse();
console.log(
  arrayD.length == 4 &&
    arrayD.arrayObj[0] == 10 &&
    arrayD.arrayObj[1] == 20 &&
    arrayD.arrayObj[2] == 30 &&
    arrayD.arrayObj[3] == 50
);
