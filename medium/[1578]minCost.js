/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
    let maxInSequence = 0;
    let total = 0;
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] == colors[i - 1]) {
            maxInSequence = Math.max(maxInSequence, Math.max(neededTime[i], neededTime[i - 1]));
            total += neededTime[i];
            if (i == 1 || colors[i - 1] != colors[i - 2]) {
                total += neededTime[i - 1];
            }
            if (i == colors.length - 1) {
                total -= maxInSequence;
            }
        } else {
            total -= maxInSequence;
            maxInSequence = 0;
        }
    }
    return total;
};

console.log(minCost("aa", [1, 2]))