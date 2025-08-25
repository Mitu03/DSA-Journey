/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
     if (nums.length === 0) return 0;

    let i = 0; // pointer for last unique element
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++; // move unique position
            nums[i] = nums[j]; // update unique value
        }
    }
    return i + 1; // number of unique elements
};