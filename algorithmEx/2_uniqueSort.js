//Task: unique sort
// 返回一个去重之后的排好序的array

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function (arr) {
  const breadcrumbs = {};
  let unique = [];

  for (let i in arr) {
    if (!breadcrumbs[arr[i]]) {
      breadcrumbs[arr[i]] = true;
      unique.push(arr[i]);
    }
  }
  console.log(unique);

  return unique.sort((a, b) => a - b);
};

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2])); // => [2,3,4]
