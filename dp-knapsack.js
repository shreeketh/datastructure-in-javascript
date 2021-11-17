
// NOT WORKING: WRONG SOLUTION
let solveKnapsack = function (profits, weights, capacity) {
    const profitPerWeightRatio = profits.map(
      (profit, index) => profit / weights[index]
    );
  
    // find max profit, then go to its descendants
    let remainingSpace = capacity;
    const visitedIndexes = new Set([]);
  
    let profit = 0;
    // while
    while (remainingSpace > 0 && visitedIndexes.size < weights.length) {
      let maxProfit = 0;
      let maxProfitIndex = 0;
      profitPerWeightRatio.forEach((x, i) => {
        if (x > maxProfit && !visitedIndexes.has(i)) {
          maxProfit = x;
          maxProfitIndex = i;
        }
      });
      if (remainingSpace > weights[maxProfitIndex]) {
        visitedIndexes.add(maxProfitIndex);
        remainingSpace = remainingSpace-weights[maxProfitIndex];
        profit += profits[maxProfitIndex];
      }
    }
  
    return profit
  };
  
  var profits = [1, 6, 10, 16];
  var weights = [1, 2, 3, 5];
  console.log(
    `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`
  );
  console.log(
    `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`
  );
  