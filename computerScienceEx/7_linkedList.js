//创建一个链表
//下面是linked list的数据结构
//const list = {
//     head: {
//         value: 12
//         next: {
//             value: 99
//             next: {
//                 value: 37
//                 next: null
//             }
//         }
//     }
// };
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(value) {
//     let node = new Node(value);
//     this.length += 1;
//     //如果head为空的时候，第一次指向
//     if (!this.head) {
//       this.head = node;
//     } else {
//       //进入了next next ...阶段,把上回tail的next指向目前的node
//       this.tail.next = node;
//     }
//     //tail重新指向新的node
//     this.tail = node;
//   }
//   pop() {
//     return this.delete(this.length - 1);
//   }
//   _find(value, test = this._test) {
//     //从头开始寻找
//     let current = this.head;
//     let i = 0;
//     while (current) {
//       if (test(value, current.value, i, current)) {
//         //如果找到了一样的值
//         return current;
//       }
//       //如果没有，查找下一个
//       current = current.next;
//       i++;
//     }

//     //都没有找到
//     return null;
//   }
//   get(index) {
//     let node = this._find(index, this._testIndex);
//     if (!node) return null;
//     return node.value;
//   }
//   delete(index) {
//     //如果是head的删除方法
//     //head有值的话，把head指向下一个就可以了
//     if (index === 0) {
//       let head = this.head;
//       if (head) {
//         this.head = head.next;
//       } else {
//         this.head = null;
//       }
//       this.length -= 1;
//       return head.value;
//     }
//     let prevNode = this._find(index - 1, this._testIndex);
//     let node = prevNode.next;
//     //因为查找的是prevNode，很可能prevNode也是结尾
//     //node取不到值的时候也要判断一下
//     if (!node) return null;
//     //如果node是结尾，要在规定一下tail的值
//     if (prevNode.next && !prevNode.next.next) this.tail = prevNode.next;
//     //执行更改链接
//     prevNode.next = node.next;
//     this.length--;

//     return node.value;
//   }

//   _test(search, nodeValue) {
//     return search === nodeValue;
//   }
//   _testIndex(search, __, i) {
//     return search === i;
//   }
// }
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
  pop() {
    return this.delete(this.length - 1);
  }

  get(index) {
    let node = this._find(index, this._testIndex);
    if (!node) return null;
    return node.value;
  }
  delete(index) {
    if (index == 0) {
      let head = this.head;
      if (head) {
        this.head = head.next;
      } else {
        this.head = null;
      }

      this.length--;
      return head.value;
    }
    let prevNode = this._find(index - 1, this._testIndex);
    let node = prevNode.next;
    if (!node) return null;
    if (node && !node.next) this.tail = node;
    prevNode.next = node.next;
    this.length--;

    return node.value;
  }

  _find(value, test = this._test) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (test(value, current.value, current, i)) {
        return current;
      }
      current = current.next;
      i++;
    }

    return null;
  }

  _test(search, nodeValue) {
    return search === nodeValue;
  }
  _testIndex(search, __, i) {
    return search === i;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
