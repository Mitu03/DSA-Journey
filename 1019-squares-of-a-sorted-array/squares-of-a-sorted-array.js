/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let place = 0;
    let left = 0;
    let demo = nums.sort((a, b)=> a-b);

    while(left < nums.length){
        demo[place] = demo[left] * demo[left];
        left++;
        place++;
    }

    return demo.sort((a,b)=> a-b);
};