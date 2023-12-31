/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let count = 0;
    let flag = false;
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j > i; j--) {
            if (s[i] == s[j]) {
                if (count < j - i - 1) {
                    count = j - i - 1;
                }
                flag = true;
            }
        }
    }
    return flag ? count: -1;
};

console.log(maxLengthBetweenEqualCharacters("abca"));