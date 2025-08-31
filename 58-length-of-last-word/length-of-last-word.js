var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let length = 0;

    // 1️⃣ Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // 2️⃣ Count characters until next space (or start of string)
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};
