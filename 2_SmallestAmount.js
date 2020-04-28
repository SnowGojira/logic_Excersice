//输入一个十位的随机数组
//得到每个数组基本的配比单位是1
//相邻的数字中大要多分配，才能保证满意
//例如[1,3,2]数组，需要[1,2,1]就都会满意

function countSmallestAmount(array) {
  let arrayContainer = array
    .slice()
    .map((el, index) => {
      return { index: index, value: el };
    })
    .sort(function (a, b) {
      return a.value - b.value;
    });

  //排序后的数组取得相应的结构
  let indexArray = arrayContainer.map((obj) => obj.index);

  let resultArray = [1];
  function recuresion(step = 1, i = 1) {
    if (indexArray.length == resultArray.length) return resultArray;

    if (Math.abs(indexArray[i] - indexArray[i - 1]) == 1) {
      step++;
    } else {
      step = 1;
    }
    resultArray = [...resultArray, step];
    i++;
    return recuresion(step, i);
  }
  recuresion();

  return resultArray.reduce((a, b) => a + b);
}

function countSmallestAmount2(array) {
  let b = new Array(10).fill(0);
  b[0] = 1;
  let arrayContainer = array
    .slice()
    .map((el, index) => {
      return { index: index, value: el };
    })
    .sort(function (a, b) {
      return a.value - b.value;
    });

  let s = arrayContainer.map((obj) => obj.index);
  // console.log(s);
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
  return b.reduce((a, b) => a + b);
}

let array = [10, 9, 8, 7, 1, 2, 3, 4, 5, 6];
console.log(countSmallestAmount(array));
console.log(countSmallestAmount2(array));
