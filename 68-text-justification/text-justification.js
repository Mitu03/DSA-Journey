/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let res = [];
    let i = 0;

    while (i < words.length) {
        let lineLen = words[i].length;
        let j = i + 1;

        // 1️⃣ Greedily add words until you cannot fit more
        while (j < words.length && lineLen + 1 + words[j].length <= maxWidth) {
            lineLen += 1 + words[j].length;
            j++;
        }

        let line = "";
        let numberOfWords = j - i;
        let numberOfSpaces = maxWidth - (lineLen - (numberOfWords - 1));

        // 2️⃣ If last line OR only one word -> left justified
        if (j === words.length || numberOfWords === 1) {
            line = words[i];
            for (let k = i + 1; k < j; k++) {
                line += " " + words[k];
            }
            // pad extra spaces to the right
            line += " ".repeat(maxWidth - line.length);
        } else {
            // 3️⃣ Fully justify: distribute spaces
            let spacesPerGap = Math.floor(numberOfSpaces / (numberOfWords - 1));
            let extraSpaces = numberOfSpaces % (numberOfWords - 1);

            line = words[i];
            for (let k = i + 1; k < j; k++) {
                let spaces = spacesPerGap + (extraSpaces-- > 0 ? 1 : 0);
                line += " ".repeat(spaces) + words[k];
            }
        }

        res.push(line);
        i = j; // move to next line
    }

    return res;
};
