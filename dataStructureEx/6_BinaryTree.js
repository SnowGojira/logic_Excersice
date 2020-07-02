class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (current.left == null) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (current.right == null) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this.root;

    while (current) {
      if (current.value == value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  /////////深度的遍历方法//////////////
  // traversalPreOrder() {
  //   this._preOrder(this.root);
  // }

  preOrder(root = this.root) {
    //root->left->right
    if (root == null) return;

    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  inOrder(root = this.root) {
    //left->root->right
    if (root == null) return;

    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }

  postOrder(root = this.root) {
    //root->left->right
    if (root == null) return;

    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }

  //高度的计算
  //高度的公式 = 1+Max(height(L),height(R))
  //左右比较，高度比较高的+1
  height(root = this.root) {
    //边界：空树
    if (root == null) return -1;
    //到达叶片停止，此时高度为0
    if (this._isLeaf(root)) return 0;
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }

  //最小值计算
  //查找公式 = min(left,right,root)
  //左中右节点中的最小值。
  min(root = this.root) {
    if (this._isLeaf(root)) return root.value;

    let left = this.min(root.left);
    let right = this.min(root.right);
    return Math.min(Math.min(left, right), root.value);
  }

  _isLeaf(node) {
    return node.left == null && node.right == null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//=====================
var tree = new BinaryTree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);
console.log(tree);
console.log(tree.find(10));
//tree.postOrder();
console.log(tree.height());
console.log(tree.min());
