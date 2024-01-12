/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    if (s.length % 2 != 0) {
        return false;
    }
    s = s.toLowerCase();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] == 'e') {
            if (i < s.length / 2) {
                count++;
            } else {
                count--;
            }
        }
    }
    return count == 0;
};

console.log(halvesAreAlike("book"))