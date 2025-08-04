/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;

    const target = total / 2;
    const n = nums.length;
    
    // ✅ Use 2D DP array for memoization
    const dp = Array.from({ length: n }, () => Array(target + 1).fill(undefined));

    function dfs(i, currSum) {
        // Base cases
        if (currSum === target) return true;
        if (i >= n || currSum > target) return false;

        // Check memo
        if (dp[i][currSum] !== undefined) return dp[i][currSum];

        // Include or Exclude current number
        const include = dfs(i + 1, currSum + nums[i]);
        const exclude = dfs(i + 1, currSum);

        dp[i][currSum] = include || exclude;
        return dp[i][currSum];
    }

    return dfs(0, 0);
};
