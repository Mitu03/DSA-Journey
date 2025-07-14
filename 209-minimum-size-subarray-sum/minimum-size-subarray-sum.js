/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let minSum = Infinity;
    let left = 0, right = nums.length;

    for(let i=0; i<nums.length; i++){
        sum += nums[i];

        while(sum >= target){
            minSum = Math.min(minSum, i - left +1);
            sum -= nums[left];
            left++;
        }
    }
    return minSum === Infinity ? 0 : minSum;
};