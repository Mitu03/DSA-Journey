/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let demo1 = [];
    let demo2 = [];
    let left = 0;

    while(left < nums.length){
        if(nums[left] % 2 === 0){
            demo1.push(nums[left]);
        }else{
            demo2.push(nums[left]);
        }
        left++;
    }

    return demo1.concat(demo2);
};