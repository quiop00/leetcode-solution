/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let hasMemory = false;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] == 9) {
            digits[i] = 0;
            if (i == 0) hasMemory = true;
        } else {
            digits[i] += 1;
            break;
        }

    }
    if (hasMemory) {
        digits.unshift(1);
    }
    return digits;
};

console.log(plusOne([1, 2, 3]));