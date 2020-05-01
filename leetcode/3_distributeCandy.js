var distributeCandies = function (candies, num_people) {
  let array = new Array(num_people).fill(0);

  function recursion(arr, i = 0, rest = candies) {
    let acc = i + 1;
    if (rest <= acc) {
      return (array[i] = rest);
    }
    if (acc < rest) {
      array[i] = acc;
      rest = rest - acc;
    }

    i++;
    console.log("matrix", `${i}  ${rest}`);
    return recursion(array, i, rest);
  }
  recursion();
  return array;
};

console.log(distributeCandies(1, 4));
