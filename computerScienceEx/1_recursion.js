function fibonaci(n) {
  if (n <= 2) return 1;
  else return fibonaci(n - 1) + fibonaci(n - 2);
}

for (let i = 1; i <= 20; i++) {
  console.log(i, fibonaci(i));
}
