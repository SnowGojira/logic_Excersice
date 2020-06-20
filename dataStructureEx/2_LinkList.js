//1. addFisrt添加链接头
//2. addLast添加链接尾
//3. removeFisrt删除链接头
//4. removeLast删除链接尾
//5. contains查找是否含有该元素，返回boolean
//6. indexOf查找索引找到对饮的元素
class LinkedList {
  constructor() {
    //first 和 last的type是node
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  addFirst(value) {
    let node = new Node(value);
    if (!this.first) {
      //如果是空数列，first和last都指向新加入的node
      this.first = node;
      this.last = node;
    } else {
      //first不为空
      //新加入的node的next指向node
      //first指向新的node
      node.next = this.first;
      this.first = node;
    }

    this.length += 1;
  }

  addLast(value) {
    let node = new Node(value);

    if (!this.first) {
      //如果first node为空
      //first 和last都指定为node
      this.first = node;
      this.last = node;
    } else {
      //如果first node不为空
      //根据定义上一个last的node的next指向新的node
      //last箭头指向node
      this.last.next = node;
      this.last = node;
    }

    this.length += 1;
  }

  removeFirst() {
    if (!this.first) {
      //情况一，如果链表为空
      //返回错误
      throw Error("the linkedlist is null");
    }

    if (this.first == this.last) {
      //情况二，如果链表只有一个
      //将两个指针均指向null
      this.first = this.length = null;
      this.length = 0;
    }

    //情况三，正常链表
    //找到即将成为first的second node
    let second = this.first.next;
    //断开fisrt next指向，漂里它
    //等待垃圾回收
    this.first.next = null;
    //将指针指向second
    this.first = second;
    this.length -= 1;
  }

  removeLast() {
    if (!this.first) {
      //情况一，如果链表为空
      //返回错误
      throw Error("the linkedlist is null");
    }

    if (this.first == this.last) {
      //情况二，如果链表只有一个
      //将两个指针均指向null
      this.first = this.length = null;
      this.length = 0;
    }

    //情况三，正常链表
    //找到即将成为last的prevLast
    let current = this.first;
    let prevLast;
    //遍历寻找prevLast
    while (current) {
      //last之前是prevlast
      if (current.next == this.last) {
        prevLast = current;
      }
      current = current.next;
    }
    //prevlast赋值为last
    //next指针清空
    this.last = prevLast;
    prevLast.next = null;

    this.length -= 1;
  }

  contains(value) {
    //引用indexOf就可以
    return this.indexOf(value) !== -1;
  }

  indexOf(value) {
    //通过循环查找
    let current = this.first;
    let i = 0;
    //current到达尾部停止
    //判断标准last指向null
    while (current) {
      if (current.value == value) {
        return i;
      }
      current = current.next;
      i++;
    }

    return -1;
  }

  size() {
    return this.length;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//测试部分不要动，最后的结果应该均为true

var LinkedListA = new LinkedList();

LinkedListA.addFirst(1);
LinkedListA.addFirst(2);
LinkedListA.addFirst(3);
console.log("'addFirst' Test Result:");
console.log(
  LinkedListA.first.value == 3 &&
    LinkedListA.first.next.value == 2 &&
    LinkedListA.first.next.next.value == 1 &&
    LinkedListA.last.value == 1
);

var LinkedListB = new LinkedList();

LinkedListB.addLast(1);
LinkedListB.addLast(2);
LinkedListB.addLast(3);
console.log("'addLast' Test Result:");
console.log(
  LinkedListB.first.value == 1 &&
    LinkedListB.first.next.value == 2 &&
    LinkedListB.first.next.next.value == 3 &&
    LinkedListB.last.value == 3
);
console.log("'indexOf' Test Result:");
console.log(
  LinkedListB.indexOf(4) == -1 &&
    LinkedListA.indexOf(3) == 0 &&
    LinkedListB.indexOf(3) == 2
);
console.log("'contains' Test Result:");
console.log(LinkedListA.contains(2) && LinkedListB.contains(4) == false);
LinkedListB.removeFirst();
console.log("'removeFisrt' Test Result:");
console.log(LinkedListB.first.value == 2 && LinkedListB.first.next.value == 3);

LinkedListA.removeLast();
console.log("'removeLast' Test Result:");
console.log(LinkedListA.last.value == 2);

var LinkedListC = new LinkedList();
console.log("'size' Test Result:");
console.log(
  LinkedListA.size() == 2 && LinkedListB.size() == 2 && LinkedListC.size() == 0
);

console.log("'' Test Result:");
console.log("'' Test Result:");
console.log("'' Test Result:");
console.log("'' Test Result:");
console.log("'' Test Result:");
