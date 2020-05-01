/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let isChangable = false;
  //如果是5元那么不需要找钱
  let fiveConter = 0,
    billContainer = bills;
  billsContainer.forEach((bill, index) => {
    if (bill == 5) {
      fiveConter++;
    }
    if (bill == 10) {
      if (fiveConter * 5 > bill) {
      } else if (fiveConter * 5 == bill && index + 1 == bills.length) {
        fiveConter++;
      }
    }
  });

  console.log(fiveConter);

  return fiveConter == bills.length
    ? (isChangable = true)
    : (isChangable = false);
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
