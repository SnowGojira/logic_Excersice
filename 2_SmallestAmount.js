//输入一个十位的随机数组
//得到每个数组基本的配比单位是1
//相邻的数字中大要多分配，才能保证满意
//例如[1,3,2]数组，需要[1,2,1]就都会满意

function countSmallestAmount(array) {
  let indexArray = [];
  let arrayContainer = [];

  //首先我要把array变成一个对象数组
  for (let i in array) {
    arrayContainer.push({
      index: i,
      value: array[i],
    });
  }

  arrayContainer.sort(function (a, b) {
    return a.value - b.value;
  });
  //排序后的数组取得相应的结构
  indexArray = arrayContainer.map((obj) => obj.index);
  console.log(arrayContainer);
  console.log(indexArray);
  let stepArray = [1];
  function recuresion(step = 1, i = 1) {
    if (indexArray.length == stepArray.length) return stepArray;

    if (Math.abs(indexArray[i] - indexArray[i - 1]) == 1) {
      step++;
    } else {
      step = 1;
    }
    // console.log("step", step);
    stepArray = [...stepArray, step];
    i++;
    return recuresion(step, i);
  }
  recuresion();
  // console.log("配比方案", stepArray);
  return stepArray.reduce((a, b) => a + b);
}

function countSmallestAmount2(array) {
  let indexArray = [];
  let arrayContainer = [];
  for (let i in array) {
    arrayContainer.push({
      index: i,
      value: array[i],
    });
  }

  arrayContainer.sort(function (a, b) {
    return a.value - b.value;
  });

  s = arrayContainer.map((obj) => obj.index);
  // console.log(s);

  let b = new Array(10).fill(0);
  for (let i = 0; i < s.length - 1; i++) {
    let _s = parseInt(s[i]);
    let _r = _s + 1 > 9 ? 9 : _s + 1,
      _l = s[i] - 1 < 0 ? 0 : s[i] - 1;
    b[_s] = max(b[_r], b[_l]) + 1;
    function max(a, b) {
      return a > b ? a : b;
    }
  }
  console.log("b", b);
  return b.reduce((a, b) => a + b) + 1;
}

let array = [10, 9, 8, 7, 1, 2, 3, 4, 5, 6];
console.log(countSmallestAmount(array));
console.log(countSmallestAmount2(array));
