//====================以下为测试和引用，不要动==========
//====================================================
//LinkedList 类
class LinkedList {
  constructor() {
    //first 和 last的type是node
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  _isEmpty() {
    return !this.first;
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

    if (this._isEmpty()) {
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
    if (this._isEmpty()) {
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
    if (this._isEmpty()) {
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

  toArray() {
    let array = [];
    let current = this.first;
    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  reverse() {
    //情况一 链表为空抛出错误
    if (this._isEmpty()) throw Error("the linkedlist is null");

    //情况二 正常反转
    //算法说明：
    //[1->2->3]
    // p<-c  n(防止丢失也要用变量存起来)
    //    p<-c  n(c变成p，n变成新的c继续改方向)

    //保存头尾指针
    let last = this.last;
    let first = this.first;

    let previous = this.first;
    let current = previous.next;
    while (current) {
      let next = current.next;
      //指针方向反转
      current.next = previous;
      //进入下一个迭代轮回
      previous = current;
      current = next;
    }

    //重新设置指针
    this.last = first;
    //原先first的next有指针，要置空
    this.last.next = null;
    this.first = last;
  }

  getKthFromTheEnd(k) {
    //验证链表不为空
    if (this._isEmpty()) throw Error("The LinkedList is null");

    //正常情况下的查找
    //查找开头点，
    //从开头点数距离间隔k-1个node
    //循环时当k-1个node到达尾端，那么此时开头点就是要返回的值
    //[1,2,3,4,5]
    // c   p
    //...
    //     c   p
    let current = this.first;
    let pivot = current;
    for (let i = 0; i < k - 1; i++) {
      pivot = pivot.next;
      //防御k超出length的范围，pivot为空
      if (!pivot) throw new Error("the value if out of range");
    }
    while (pivot !== this.last) {
      current = current.next;
      pivot = pivot.next;
    }

    return current.value;
  }

  findMiddle() {
    if (this._isEmpty()) throw new Error("the linkedlist is null");
    //奇数的时候
    //1->1
    //3->2
    //5->3
    //...
    //node的点增加二，middle点增加一

    //偶数的时候
    //2->1,2
    //4->2,3
    //6->3,4
    //...
    //算法基本一致，只是middle要返回middle和middle.next
    let current = this.first;
    let middle = this.first;
    while (
      //奇数的时候
      current != this.last &&
      //偶数的时候
      current.next != this.last
    ) {
      current = current.next.next;
      middle = middle.next;
    }

    //如何判断奇偶？
    //奇数的时候，最后一次增长指向last，偶数的时候指向null
    if (current == this.last) {
      return middle.value;
    } else {
      return [middle.value, middle.next.value];
    }
  }

  hasLoop() {
    if (this._isEmpty()) throw new Error("the linkedlist is null");
    //Floyd’s Cycle-finding Algorithm.
    //快标走两步，慢标走一步，最后两者重合
    let slow = this.first;
    let fast = this.first;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) return true;
    }

    return false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
