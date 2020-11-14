//应用一： 反转字符

const reverseString = (str) => {
  //为空和null没有意义，作为error throw出去
  if (!str) throw new Error("please input an actual value");

  let strArr = str.split("");
  let reversed = "";
  //也可以使用for循环
  //这里使用while，是以stack视角判断栈是否为空
  while (strArr.length !== 0) {
    reversed += strArr.pop();
  }

  return reversed;
};

//应用二 平衡表达式的判断
const isBalancedExp = (str) => {
  //以下为重构部分，为了让下面的逻辑像人话
  let leftBrackets = ["(", "{", "<", "["];
  let rightBrackets = [")", "}", ">", "]"];

  function isLeftBracket(char) {
    return leftBrackets.includes(char);
  }

  function isRightBracket(char) {
    return rightBrackets.includes(char);
  }

  function bracketsMatch(left, right) {
    // return (
    //   (right == ")" && left != "(") ||
    //   (right == "]" && left != "[") ||
    //   (right == "}" && left != "{") ||
    //   (right == ">" && left != "<")
    // );
    return leftBrackets.indexOf(left) == rightBrackets.indexOf(right);
  }

  let strArr = str.split("");
  //只用()为例子
  //使用stack控制
  //遇到(的时候进栈push
  //遇到)的时候把进栈的元素pop出来
  //最后栈空了说明平衡

  let brackets = [];
  for (item of strArr) {
    if (isLeftBracket(item)) brackets.push(item);

    if (isRightBracket(item)) {
      //栈空时在进入右边括号一定不封闭
      if (brackets.length == 0) return false;

      //brackets,左右是否能配对
      //不配对即出现(}这种情况
      //立即返回false
      let top = brackets[brackets.length - 1];
      if (!bracketsMatch(top, item)) return false;

      //可配对pop出去
      brackets.pop();
    }
  }

  return brackets.length == 0;
};

//应用三， minStack
//里面有一个还有个stack追踪栈内最小值
class minStack {
  constructor() {
    this.array = [];
    this.minArray = [];
  }

  pop() {
    //如果arrayTop为空，抛出错误
    if (this._isEmpty()) throw new Error("the stack has no element to pop");

    //确保arrayTop有值
    let arrayTop = this.array.pop();
    //如果顶端一致，minArray才会出栈
    if (arrayTop == this._peekMin()) this.minArray.pop();
  }

  push(item) {
    this.array.push(item);

    //minArray为空直接进栈
    if (this._isMinEmpty()) this.minArray.push(item);
    //如果不为空那么比较顶端的和item谁小
    //小才进栈
    if (item < this._peekMin()) this.minArray.push(item);
  }
  _peekMin() {
    if (this._isMinEmpty()) return undefined;
    return this.minArray[this.minArray.length - 1];
  }
  _isMinEmpty() {
    return this.minArray.length == 0;
  }
  _isEmpty() {
    return this.array.length == 0;
  }
  min() {
    return this._peekMin();
  }
}

//测试部分不要动，最后应该得到true
//console.log(reverseString(""));
console.log(
  reverseString("a") == "a" &&
    reverseString("abc") == "cba" &&
    reverseString("abba") == "abba"
);

console.log(isBalancedExp("(1+2)[2]{{<3>+1}}"));

let minstack = new minStack();
minstack.push(2);
minstack.push(5);
minstack.push(3);
minstack.push(1);
minstack.pop();
console.log(minstack.min() == 2);
