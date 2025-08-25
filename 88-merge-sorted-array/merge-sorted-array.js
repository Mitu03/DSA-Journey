/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1;        // last valid index in nums1
  let j = n - 1;        // last index in nums2
  let k = m + n - 1;    // fill position from the end of nums1

  // Merge from the back so we don't overwrite nums1's valid part
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  // Only nums2 leftovers need copying (nums1 leftovers already in place)
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};
