/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null; // possible majority element
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;   // choose new candidate
        }
        count += (num === candidate) ? 1 : -1; // vote system
    }
    
    return candidate; // since majority always exists
};