/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0, right = s.length-1;

    while(left < right){
        if(s[left] !== s[right]){
            return isPal(s, left + 1, right) || isPal(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;

    function isPal(s, i, j){
        while(i < j){
            if(s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    }
};