//JS 中的对象就是hash map
//应用一查找第一个不重复的字母
function FindFirstNorepeatChar(str) {
  //创建hash表来存储str
  //“apple”为例
  //{ a: 1, p: 2, l: 1, 3: 1 }
  let obj = {};
  for (let a of str) {
    if (!obj[a]) {
      obj[a] = 1;
    } else {
      obj[a] += 1;
    }
  }
  //遍历hash找到value = 1的值
  for (let i in obj) {
    if (obj[i] == 1) return i;
  }
}

//应用二找到第一个重复的字母
function FindFirstRepeatChar(str) {
  let obj = {};
  for (let a of str) {
    if (!obj[a]) {
      obj[a] = 1;
    } else {
      obj[a] += 1;
    }
  }

  for (let i in obj) {
    if (obj[i] > 1) return i;
  }
}
console.log(FindFirstNorepeatChar("a green apple") == "g");
console.log(FindFirstRepeatChar("green apple") == "e");
