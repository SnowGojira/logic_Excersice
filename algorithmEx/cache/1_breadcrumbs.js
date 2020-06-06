//创建breadcrumbs对象
//判断数组中是否用重复的对象
//如果已经被缓存过了那么返回false
//反之返回true

function isUnique(arr) {
  let result = true;
  let breadcrumbs = {};

  for (let i = 0; i < arr.length; i++) {
    if (breadcrumbs[arr[i]]) {
      result = false;
    } else {
      breadcrumbs[arr[i]] = true;
    }
  }

  return result;
}

console.log(isUnique([1, 2, 3]));
console.log(isUnique([1, 2, 1]));
