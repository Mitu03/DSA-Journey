/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
      s = s.trim();
    
    // 2. Split the string into words
    let words = s.split(" ");
    
    // 3. Return the length of the last word
    return words[words.length - 1].length;
};