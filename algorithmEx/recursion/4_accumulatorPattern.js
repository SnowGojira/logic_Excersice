function joinElements(array, joinString) {
  const recurse = (index, resultSoFar) => {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  };

  return recurse(0, "");
}

//练习题：把上面的代码改写成for loop的枚举形式
function joinElementsLoop(array, joinString) {
  let result = "";
  for (i in array) {
    if (i == array.length - 1) {
      result += array[i];
    } else {
      result += array[i] + joinString;
    }
  }

  return result;
}
// console.log(joinElements(["s", "cr", "t cod", " :) :)"], "e"));
console.log(joinElementsLoop(["s", "cr", "t cod", " :) :)"], "e"));
