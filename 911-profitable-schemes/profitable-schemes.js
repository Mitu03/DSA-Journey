/**
 * @param {number} n - total members (like drivers/workers)
 * @param {number} minProfit - minimum profit required
 * @param {number[]} group - workers required for each project/crime
 * @param {number[]} profit - profit for each project/crime
 * @return {number} - number of possible schemes
 */
var profitableSchemes = function(n, minProfit, group, profit) {
  const MOD = 1e9 + 7;
  const m = group.length;

  // dp[i][j] = number of schemes using at most i workers to achieve profit j
  // profit is capped at minProfit (no need to track more)
  const dp = Array.from({ length: n + 1 }, () => Array(minProfit + 1).fill(0));
  dp[0][0] = 1; // base case: 1 way to do nothing

  for (let k = 0; k < m; k++) {
    const g = group[k]; // workers needed
    const p = profit[k]; // profit gained

    // update dp backwards (to avoid reusing same project multiple times)
    for (let i = n; i >= g; i--) {
      for (let j = minProfit; j >= 0; j--) {
        // new profit after adding this project
        const newProfit = Math.min(minProfit, j + p);
        dp[i][newProfit] = (dp[i][newProfit] + dp[i - g][j]) % MOD;
      }
    }
  }

  // sum of all ways with profit ≥ minProfit
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result = (result + dp[i][minProfit]) % MOD;
  }

  return result;
};
