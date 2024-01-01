/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let count = 0;
    let i = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    for (let j = 0; j < s.length; j++) {
        if (i >= g.length) {
            break;
        }
        if (s[j] >= g[i]) {
            count++;
            i++;
        }
    }
    return count;
};

console.log(findContentChildren([1, 2], [1, 2, 3]));