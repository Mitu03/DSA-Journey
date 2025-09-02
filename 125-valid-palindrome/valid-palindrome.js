var isPalindrome = function(s) {
  // helper: check if a character is alphanumeric
  const isAlphaNum = (ch) => {
    return /[a-zA-Z0-9]/.test(ch);
  };

  let left = 0, right = s.length - 1;

  while (left < right) {
    // skip left non-alphanumeric
    while (left < right && !isAlphaNum(s[left])) left++;

    // skip right non-alphanumeric
    while (left < right && !isAlphaNum(s[right])) right--;

    // compare (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false; // mismatch
    }

    left++;
    right--;
  }

  return true; // fully matched
};
