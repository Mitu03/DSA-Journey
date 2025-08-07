/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        // If the digit is less than 9, just add 1 and return
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        // Otherwise, set current digit to 0 and continue loop
        digits[i] = 0;
    }

    // If all digits were 9, we need to add 1 at the beginning
    digits.unshift(1);
    return digits;
};
