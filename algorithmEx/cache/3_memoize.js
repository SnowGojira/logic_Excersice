// Task 1: 示例函数
const times10 = (v) => {
  return v * 10;
};

console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
console.log("times10 returns:", times10(9));

// Task 2: 用cache对象缓存函数执行的结果
// protip 1: 创建一个函数检查函数是否执行过。
// protip 2: 如果函数没有被执行过，执行它并用cache对象存入结果

const cache = {};

const memoTimes10 = (n, fn) => {
  if (n in cache) {
    console.log(`this value is cached: ${cache[n]}`);
  } else {
    cache[n] = fn(n);
    console.log(`this value will be calculated: ${cache[n]}`);
  }
  return cache[n];
};

console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
console.log(memoTimes10(9, times10)); // calculated
console.log(memoTimes10(9, times10)); // cached

const memoizedClosureTimes10 = () => {
  let cache = {};

  return function inner(n) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = times10(n);
      return cache[n];
    }

    return cache[n];
  };
};

const memoClosureTimes10 = memoizedClosureTimes10();
console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
try {
  console.log("Task 3 calculated value:", memoClosureTimes10(9)); // calculated
  console.log("Task 3 cached value:", memoClosureTimes10(9)); // cached
} catch (e) {
  console.error("Task 3:", e);
}

// Task 4: Make your memo function generic and
//accept the times10 function as a callback
//rather than defining the n * 10 logic inside the
//if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters
//are saved in the closure as well, just like the cache
//from the previous example.
const memoize = (cb) => {
  let cache = {};

  return (n) => {
    if (n in cache) {
      //return cache[n];
    } else {
      cache[n] = cb(n);
      //return cache[n];
    }

    return cache[n];
  };
};

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);
console.log("~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~");
try {
  console.log("Task 4 calculated value:", memoizedTimes10(9)); // calculated
  console.log("Task 4 cached value:", memoizedTimes10(9)); // cached
} catch (e) {
  console.error("Task 4:", e);
}
