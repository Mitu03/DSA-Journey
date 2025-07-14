/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let DemoMap = {};

    for(let i = 0; i<s.length; i++){
        DemoMap[s[i]] = i;
    }

    let start = 0, end = 0;
    let result = [];

    for(let i = 0; i < s.length; i++){
        end = Math.max(end, DemoMap[s[i]]);

        if(i === end){
           result.push(end - start + 1);
           start = i + 1;
        }
    }
    return result;
};