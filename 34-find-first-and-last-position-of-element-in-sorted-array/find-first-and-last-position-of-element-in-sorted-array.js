/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // Helper function

    const functionHelper = (fisrtNum)=> {
        let low = 0; 
        let high = nums.length-1;
        let pos = -1;

        while(low <= high){

            let mid = Math.floor((low+ high) / 2);
            if(nums[mid] === target){
                pos = mid;
                if(fisrtNum) high = mid - 1;
                else low = mid + 1;
            }else if (nums[mid] < target){
                low = mid + 1;
            }else{
                high = mid-1;
            }
        }
        return pos;
    }

    let first = functionHelper(true);
    let second = functionHelper(false);

    return [first, second];
};