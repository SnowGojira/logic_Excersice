//输入一个十位的随机数组
//得到每个数组基本的配比单位是1
//相邻的数字中大要多分配，才能保证满意
//例如[1,3,2]数组，需要[1,2,1]就都会满意

function countSmallestAmount(array) {
  let sum = 1;
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
  indexArray = arrayContainer.map((obj) => obj.index);
  console.log(arrayContainer);
  console.log(indexArray);
  let stepArray = [1];
  let step = 1;
  function recuresion(step = 1, i = 1) {
    if (indexArray.length == stepArray.length) return stepArray;
    // console.log(Math.abs(indexArray[i] - indexArray[i - 1]));
    if (Math.abs(indexArray[i] - indexArray[i - 1]) == 1) {
      step++;
      stepArray = [...stepArray, step];
    } else {
      step = 1;
      stepArray = [...stepArray, step];
    }
    // console.log("step", step);
    i++;
    return recuresion(step, i);
  }
  recuresion();
  console.log("stepArray", stepArray);
  return stepArray.reduce((a, b) => a + b);
}

let array = [2, 3, 4, 9, 6, 7, 8, 1, 10, 4];
console.log(countSmallestAmount(array));
