var cache = [0, 1];

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  for (let i = 2; i <= n; i++) {
    const res = cache[i - 1] + cache[i - 2];
    cache[i] = res;
  }
  return cache[n];
}
fibonacci(6)

// Another solution
function fibonacci(n){
  var dp = [0,1]

  for(var x=2; x<=n; x++){
    dp[x]=dp[x-1]+dp[x-2]
  }

  return dp[n]
}