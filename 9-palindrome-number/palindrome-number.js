/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
      if (x < 0) return false;

    // Step 2: Convert number to string
    let str = x.toString();

    // Step 3: Reverse the string
    let reversed = str.split('').reverse().join('');

    // Step 4: Compare original and reversed
    return str === reversed;
};