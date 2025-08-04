/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((a, b) => a + b, 0);

    if ((sum + target) % 2 !== 0 || Math.abs(target) > sum) return 0;

    const newTarget = (sum + target) / 2;

    const dp = new Array(newTarget + 1).fill(0);
    dp[0] = 1;  // One way to make sum 0 — by choosing nothing

    for (let num of nums) {
        for (let i = newTarget; i >= num; i--) {
            dp[i] += dp[i - num];
        }
    }

    return dp[newTarget];
};
