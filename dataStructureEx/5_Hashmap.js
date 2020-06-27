//JS 中的对象就是hash map
function FirstNorepeatWord(str) {
  let obj = {};
  for (let a of str) {
    if (!obj[a]) {
      obj[a] = 1;
    } else {
      obj[a] += 1;
    }
  }
  console.log(obj);
  for (let i in obj) {
    if (obj[i] == 1) return i;
  }
}

console.log(FirstNorepeatWord("a green apple") == "g");
