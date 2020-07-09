class BinaryTree {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(value) {
    this.count += 1;

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

  //使用recuresion来实现find
  contains(value, root = this.root) {
    if (root == null) return false;
    if (root.value == value) return true;
    return this.contains(value, root.left) || this.contains(value, root.right);
  }

  size() {
    return this.count;
  }

  /////////深度的遍历方法//////////////

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

  //=============================
  //========元素计算=============
  //最小值计算
  //查找公式 = min(left,right,root)
  //左中右节点中的最小值。O(n)
  min(root = this.root) {
    //edge case
    if (this._isEmpty(root))
      throw new Error("null pointer: this tree is empty");

    if (this._isLeaf(root)) return root.value;

    let left = this.min(root.left);
    let right = this.min(root.right);
    return Math.min(Math.min(left, right), root.value);
  }
  //最大值
  max(root = this.root) {
    //edge case
    if (this._isEmpty(root))
      throw new Error("null pointer: this tree is empty");

    if (this._isLeaf(root)) return root.value;

    let left = this.max(root.left);
    let right = this.max(root.right);
    return Math.max(Math.max(left, right), root.value);
  }

  //Binary Search Tree
  //只需要找到最左边的值
  BSTmin(root = this.root) {
    //edge case
    //树为空
    if (this._isEmpty(root))
      throw new Error("null pointer: this tree is empty");

    //最左边的叶片是最小值
    if (this._isLeaf(root)) return root.value;

    return this.min(root.left);
  }
  countLeaves(root = this.root) {
    if (root == null) return 0;

    if (this._isLeaf(root)) return 1;

    return this.countLeaves(root.left) + this.countLeaves(root.right);
  }
  //高度的计算
  //高度的公式 = 1+Max(height(L),height(R))
  //左右比较，高度比较高的+1
  height(root = this.root) {
    //边界：空树
    if (this._isEmpty(root)) return -1;
    //到达叶片停止，此时高度为0
    if (this._isLeaf(root)) return 0;
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }

  //查找距离d=n level上的所有元素
  //           7
  //      5         9
  //   3    6     8  10
  // 2  4
  //上面的例子 d=2 得到 [3,6,8,10]
  findItemsByDistance(distance, root = this.root, sets = []) {
    //边界条件
    if (root == null) return;

    //迭代条件：
    //distance 等于0
    if (distance == 0) {
      sets.push(root.value);
    }
    distance -= 1;
    this.findItemsByDistance(distance, root.left, sets);
    this.findItemsByDistance(distance, root.right, sets);

    return sets;
  }

  levelOrder() {
    //知道distance，findItemsByLevel遍历
    let distance = this.height();
    for (let i = 0; i <= distance; i++) {
      console.log(this.findItemsByDistance(i));
    }
  }
  _isLeaf(node) {
    return node.left == null && node.right == null;
  }
  _isEmpty(node) {
    return node == null;
  }

  //////=========等价=========
  equality(tree) {
    let root1 = this.root;
    let root2 = tree.root;

    return this.equals(root1, root2);
  }
  equals(root1, root2) {
    if (root1 == null && root2 == null) return true;

    if (root1 !== null && root2 !== null)
      return (
        root1.value == root2.value &&
        this.equals(root1.left, root2.left) &&
        this.equals(root1.right, root2.right)
      );
    return false;
  }

  isBST(root = this.root, min = -Infinity, max = Infinity) {
    if (root == null) return true;

    if (root.value < min || root.value > max) return false;

    return (
      this.isBST(root.left, min, root.value - 1) &&
      this.isBST(root.right, root.value + 1, max)
    );
  }
  //两个值是不是sublings
  areSubling(value1, value2, root = this.root) {
    if (root == null) return false;

    var areSubling = false;
    if (root.left != null && root.right != null) {
      areSubling =
        (root.left.value == value1 && root.right.value == value2) ||
        (root.left.value == value2 && root.right.value == value1);
    }

    return (
      areSubling ||
      this.areSubling(value1, value2, root.left) ||
      this.areSubling(value1, value2, root.right)
    );
  }

  //查找祖先
  getAncestors(value) {
    var list = [];
    this._getAncestors(value, this.root, list);
    return list;
  }

  _getAncestors(value, root = this.root, list = []) {
    if (root == null) return false;

    if (root.value == value) return true;

    if (
      this._getAncestors(value, root.left, list) ||
      this._getAncestors(value, root.right, list)
    ) {
      list.push(root.value);
      return true;
    }

    return false;
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
const tree = new BinaryTree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);

const tree2 = new BinaryTree();
tree2.insert(7);
tree2.insert(4);
tree2.insert(9);
tree2.insert(1);
tree2.insert(6);
tree2.insert(8);
tree2.insert(10);

console.log(tree.root.left.left.value == 1);
console.log(tree.find(10));
console.log(tree.contains(10));

//tree.preOrder();
console.log(tree.height() == 2);
console.log(tree.min() == 1);
console.log(tree.max() == 10);
console.log(tree.countLeaves() == 4);
console.log(tree.equality(tree2));
console.log(tree.isBST());
console.log(tree.areSubling(4, 9));
console.log(tree.getAncestors(1));
