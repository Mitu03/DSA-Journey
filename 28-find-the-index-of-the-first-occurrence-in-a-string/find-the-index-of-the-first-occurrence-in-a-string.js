/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Edge case: if needle is empty, return 0
    if (needle.length === 0) return 0;

    // Loop through haystack until there's enough room for needle
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Check substring from i to i+needle.length
        if (haystack.substring(i, i + needle.length) === needle) {
            return i; // Found match
        }
    }

    // If no match found
    return -1;
};
