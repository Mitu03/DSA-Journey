/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0, right = s.length-1;

    while(left < right){
       while(left < right && !isPlan(s[left])) left++;
       while(left < right && !isPlan(s[right])) right--;

       if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
       left++;
       right--;
    }
    return true;

    function isPlan(char){
        return /[a-zA-Z0-9]/.test(char)
    }
};