/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
     const memo = {};  // Step -> minCost

  function dp(i) {
    // Base case: if you're on step 0 or 1, cost is just cost[i]
    if (i === 0 || i === 1) return cost[i];

    // Check if already computed
    if (memo[i] !== undefined) return memo[i];

    // Choose minimum of (step from i-1 or i-2)
    memo[i] = cost[i] + Math.min(dp(i - 1), dp(i - 2));
    return memo[i];
  }

  // You can reach the top either from the last step or second last step
  const n = cost.length;
  return Math.min(dp(n - 1), dp(n - 2));
};