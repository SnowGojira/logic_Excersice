//实现priorityQueue
//队列会按照从小到大的顺序在插入的时候完成自动排列
//[2,1,3,5,4] --> [1,2,3,4,5]
class priorityQueue {
  constructor() {
    this.array = [];
  }

  enqueue(value) {
    if (!this.isEmpty()) {
      for (let i = 0; i < this.array.length; i++) {
        if (value > this.array[i] && value < this.array[i + 1]) {
          this.array.splice(i + 1, 0, value);
          return;
        } else {
          this.array.push(value);
          return;
        }
      }
    } else {
      this.array.push(value);
    }
  }

  dequeue() {
    return this.array.shift();
  }

  peek() {
    return this.array[0];
  }

  isEmpty() {
    return this.array.length == 0;
  }
}

//测试部分，得到结果应均为true

let queue = new priorityQueue();
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
console.log(queue.dequeue() == 1);
console.log(queue);
