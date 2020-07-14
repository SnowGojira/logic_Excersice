function sum() {
  console.log(arguments);
  if (Array.isArray(arguments[0])) {
    console.log(arguments[0]);
    return arguments[0].reduce((a, b) => a + b);
  }
  return [...arguments].reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3));
