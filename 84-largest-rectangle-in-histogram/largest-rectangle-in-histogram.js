/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = []; // store indices
    let maxArea = 0;
    heights.push(0); // sentinel to flush stack at end

    for (let i = 0; i < heights.length; i++) {
        // Maintain increasing stack
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
};