/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
     const deque = [];  // store indices of potential max elements
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // Step 1: Remove indices outside the current window
        if (deque.length && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Step 2: Maintain decreasing order in deque
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Step 3: Add current index
        deque.push(i);

        // Step 4: Add max to result only after the first k-1 elements
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};