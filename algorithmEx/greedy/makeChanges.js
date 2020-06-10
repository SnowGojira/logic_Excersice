// Write a function, makeChange, that returns an integer
// that represents the least number of coins
// that add up to an amount
//where the amount is always divisible by 5.

// const makeChange = (coins, amount) => {
//   coins.sort((a, b) => b - a);

//   let coinTotal = 0;
//   let i = 0;
//   while (amount > 0) {
//     if (coins[i] <= amount) {
//       amount -= coins[i];
//       coinTotal++;
//     } else {
//       i++;
//     }
//   }
//   return coinTotal;
// };

//coin values:  10, 6， 1
//brutal force algorithm
const coins = [10, 6, 1];

const makeChange = (value, i) => {
  if (value === 0) return 0;
  let minCoins;
  coins.forEach((coin, i) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin, i);
      if (minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
};

console.log(makeChange(12));

// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10)
