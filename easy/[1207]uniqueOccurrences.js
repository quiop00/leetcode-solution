/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freq = new Map();
    for (const x of arr) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    const s = new Set(freq.values());
    return freq.size === s.size;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));