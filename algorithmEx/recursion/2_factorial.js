var factorial = (n) => {
  if (n < 2) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(5));

var factorialWithLoop = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};

console.log(factorialWithLoop(5));
