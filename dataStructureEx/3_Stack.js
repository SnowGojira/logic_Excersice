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

//测试部分不要动，最后应该得到true
//console.log(reverseString(""));
console.log(
  reverseString("a") == "a" &&
    reverseString("abc") == "cba" &&
    reverseString("abba") == "abba"
);
