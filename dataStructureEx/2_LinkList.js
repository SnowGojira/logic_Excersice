//1. addFisrt添加链接头
//2. addLast添加链接尾
//3. deleteFisrt删除链接头
//4. deleteLast删除链接尾
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

  deleteFirst() {}

  deleteLast() {}

  contains(value) {}

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
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//测试部分

var LinkedListA = new LinkedList();

LinkedListA.addFirst(1);
LinkedListA.addFirst(2);
LinkedListA.addFirst(3);

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

console.log(
  LinkedListB.first.value == 1 &&
    LinkedListB.first.next.value == 2 &&
    LinkedListB.first.next.next.value == 3 &&
    LinkedListB.last.value == 3
);

console.log(
  LinkedListB.indexOf(4) == -1 &&
    LinkedListA.indexOf(3) == 0 &&
    LinkedListB.indexOf(3) == 2
);
