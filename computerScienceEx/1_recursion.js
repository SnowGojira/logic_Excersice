//实现斐波那契额数列
function fibonaci(n) {
  if (n <= 2) return 1;
  return fibonaci(n - 1) + fibonaci(n - 2);
}
for (let i = 1; i <= 20; i++) {
  console.log(i, fibonaci(i));
}
//实现阶乘
//n*(n-1)*(n-2)*....*1

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(10));
