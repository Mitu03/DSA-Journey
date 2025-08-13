/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    let left = 0;                      // Pointer starting from left
    let right = height.length - 1;     // Pointer starting from right
    let leftMax = 0;                    // Max height from left side so far
    let rightMax = 0;                   // Max height from right side so far
    let water = 0;                      // Result: total trapped water

    while (left < right) {
        if (height[left] < height[right]) {
            // Update leftMax or calculate trapped water at left
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            // Update rightMax or calculate trapped water at right
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
}

