/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const wordsArray = s.trim().split(/\s+/);
    if (wordsArray.length == 0) return 0;
    return wordsArray[wordsArray.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))