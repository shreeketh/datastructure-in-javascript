/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var left = 0;
  var maxProfit = 0;

  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < prices[left]) {
      left = i;
    } else {
      var profit = prices[i] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    }
  }

  return maxProfit;
};
