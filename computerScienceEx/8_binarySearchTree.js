//手写一个二叉树类

class Tree {
  constructor() {
    this.root = null;
  }

  toObject() {
    return this.root;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let current = this.root;
    while (true) {
      if (current.value > value) {
        //数组插入左边
        if (current.left) {
          //如果已经有children了
          //那么把指针移动向下一个，继续loop
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      } else {
        //数组插入右边
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
