/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let placeZero = 0;
    let left = 0;

    while(left < nums.length){
        if(nums[left] !== 0){
            nums[placeZero] = nums[left];
            placeZero++;
        }
        left++;

    }

     while(placeZero < nums.length){
            nums[placeZero] = 0;
            placeZero++;
        }
};