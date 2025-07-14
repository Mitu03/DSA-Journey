/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const heightMin = Math.min(height[left], height[right]);
        const width = right - left;
        const area = heightMin * width;

        maxWater = Math.max(maxWater, area);

        // Move the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};