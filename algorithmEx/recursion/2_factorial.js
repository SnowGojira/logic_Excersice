var factorial = (n) => {
  if (n < 2) return 1;

  return n * factorial(n - 1);
};

// console.log(factorial(5));

var factorialWithLoop = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};

function myFactorial(n) {
  if (n < 2) return 1;
  return n * myFactorial(n - 1);
}

function memoize(fn) {
  let cached = {};
  return function inner(n) {
    if (n in cached) {
      console.log("I am cashed!");
      return cached[n];
    } else {
      console.log("I am calculated");
      cached[n] = fn(n);
      return fn(n);
    }
  };
}

const memoFactorial = memoize(myFactorial);
console.log(memoFactorial(5));
console.log(memoFactorial(5));
