// 习题一 自己写一个linkedlist
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.length || index < 0 || !this.head) return -1;
  else if (this.head === this.tail) return this.head.value;
  else {
    let current = this.head;
    while (index) {
      current = current.next;
      index -= 1;
    }

    return current.value;
  }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new Node(val);
  if (!this.head) {
    this.tail = node;
  } else {
    node.next = this.head;
  }

  this.head = node;
  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
  } else if (this.head) {
    this.tail.next = node;
  }
  this.tail = node;
  this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let node = new Node(val);
  if (index > this.length) return -1;
  else if (index == 0) return this.addAtHead(val);
  else if (index == this.length) return this.addAtTail(val);
  else {
    // let current = this.head;
    let prev = this.head;
    let pivot = index - 1;
    while (pivot) {
      prev = prev.next;
      pivot--;
    }
    node.next = prev.next;
    prev.next = node;
  }
  this.length++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.length || index < 0 || !this.head) return;
  else if (index === 0) {
    let second = this.head.next;
    this.head.next = null;
    this.head = second;
    this.length--;
    return;
  } else {
    let prev = this.head;
    let pivot = index - 1;
    while (pivot) {
      prev = prev.next;
      pivot--;
    }
    let n = prev.next.next;
    if (!n) {
      this.tail = prev;
      prev.next = null;
    }
    prev.next = n;
    this.length--;
  }
};

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (true) {
    if (fast == null || fast.next == null) return null;
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) break;
  }
  fast = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};

