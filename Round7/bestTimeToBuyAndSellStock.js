/**
 * Date: 26th Dec, 2025
 * 📌 Problem Statement — Best Time to Buy and Sell Stock (I)
 * You are given an array prices, where:
 *      prices[i] = price of a stock on day i
 * You need to determine the maximum profit you can achieve by:
 *      Buying the stock on one day, and
 *      Selling it on a later day
 * ❗ Constraints:
 *      You can complete only 1 buy and 1 sell transaction
 *      You must buy before you sell
 *      If no profit is possible, return 0 (you can't lose money by choosing not to trade)
 * Example 1:
 *      prices = [7, 1, 5, 3, 6, 4]
 *      output: 5
 *      explanation:
 *          Best action:
 *              Buy at price 1 (day 1)
 *              Sell at price 6 (day 4)
 *              Profit = 6 − 1 = 5
 * Example 2:
 *      prices = [7, 6, 4, 3, 1]
 *      output: 0
 *      explanation: Price keeps dropping, hence no profit
 */
function getMaxProfit(prices) {
  if (!prices || prices.length === 0) return 0;

  let minPrice = prices[0],
    maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currPrice = prices[i];
    const currProfit = currPrice - minPrice;
    if (currProfit > maxProfit) {
      maxProfit = currProfit;
    }

    if (currPrice < minPrice) {
      minPrice = currPrice;
    }
  }

  return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(
  `Max profit can be obtained from [${prices}] is: ${getMaxProfit(prices)}`
);

prices = [7, 6, 4, 3, 1];
console.log(
  `Max profit can be obtained from [${prices}] is: ${getMaxProfit(prices)}`
);

prices = [3, 2, 6, 1, 4];
console.log(
  `Max profit can be obtained from [${prices}] is: ${getMaxProfit(prices)}`
);

prices = [3, 2, 6, 1, 100];
console.log(
  `Max profit can be obtained from [${prices}] is: ${getMaxProfit(prices)}`
);
