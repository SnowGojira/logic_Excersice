const array = [[1, 2, 3], 2, 3, [[1, 2], 3]];

function flatten(array) {
  var flattend = [];

  function flat(array) {
    console.log("array", array);
    array.forEach(function (el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  }

  flat(array);

  return flattend;
}

//==================
console.log(flatten(array));

//console.log(flat([[1, [1, 2]]]));
