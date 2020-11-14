//应用一，reverse反转队列
//仅是用enqueue == push，dequeue == shift,
//涉及到了反转，一定会用栈
const reverse = (queue) => {
  let newArray = [];
  let stack = [];
  while (queue.length !== 0) {
    stack.push(queue.shift());
  }

  while (stack.length !== 0) {
    newArray.push(stack.pop());
  }

  return newArray;
};

//应用二
//反转队列里前K个元素 Q = [10, 20, 30, 40, 50], K = 3
//Output: Q = [30, 20, 10, 40, 50]
//使用栈和队列的方法来解决问题
//不要使用array数组的方法
const reverseToKth = (queue, k) => {
  //边界：
  //k不能越界
  if (k > queue.length) throw new Error("the k is out of the queue's range");

  //主体：
  //反转的一定要使用stack
  //stackToKth储存要反转的元素
  let stackToKth = [];
  for (let i = 0; i < k; i++) {
    let top = queue.shift();
    stackToKth.push(top);
  }
  //重新排序
  let newQueue = [];
  //先enqueue stack
  while (stackToKth.length !== 0) {
    newQueue.push(stackToKth.pop());
  }
  //在enqueue queue中剩余的元素
  while (queue.length !== 0) {
    newQueue.push(queue.shift());
  }

  return newQueue;
};

//测试部分，得到结果应均为true
console.log(
  reverse([10, 20, 30])[0] == 30 &&
    reverse([10, 20, 30])[1] == 20 &&
    reverse([10, 20, 30])[2] == 10
);

console.log(
  reverseToKth([10, 20, 30, 40, 50], 3)[0] == 30 &&
    reverseToKth([10, 20, 30, 40, 50], 3)[1] == 20 &&
    reverseToKth([10, 20, 30, 40, 50], 3)[2] == 10
);
