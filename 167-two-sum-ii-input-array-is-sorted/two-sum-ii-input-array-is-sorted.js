/**
 * @param {number[]} numbers - sorted array
 * @param {number} target - target sum
 * @return {number[]} - 1-indexed positions
 */
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      // Return 1-indexed positions
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++; // Increase sum
    } else {
      right--; // Decrease sum
    }
  }

  return []; // As per problem constraints, there will always be a solution
}

// Demo usage
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [1, 2]
console.log(twoSum([2, 3, 4], 6));       // Output: [1, 3]
console.log(twoSum([-1, 0], -1));        // Output: [1, 2]
