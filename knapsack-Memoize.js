let solveKnapsack = function(profits, weights, capacity) {
    var numberOfCalls = 0
    var dp = []
    function recursiveFn(p, w, c, index){
      numberOfCalls++
      if(index > p.length || c<=0) return 0; // base case
  
      dp[index] = dp[index] || [];
      if(dp[index][c] != undefined){
        return dp[index][c]
      }
  
      var profit1=0;
      var profit2 = 0
  
      if(w[index] <= c){
        profit1 = p[index] + recursiveFn(p, w, c-w[index], index+1)
      } 
        profit2 = recursiveFn(p, w, c, index+1)
  
        var profit = Math.max(profit1, profit2)
        dp[index][c] = profit
      return profit
    }
  
    var prof = recursiveFn(profits, weights, capacity, 0)
  console.log('numberOfCalls:'+ numberOfCalls)
    return prof
  };
  
  var profits = [1, 6, 10, 16];
  var weights = [1, 2, 3, 5];
//   numberOfCalls:32
  console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
//   numberOfCalls:29
  console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);