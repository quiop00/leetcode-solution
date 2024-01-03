/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    var deviceOfRows = [];
    let result = 0;
    for (let row of bank) {
        let count = 0;
        for (let c of row) {
            if (c == '1') {
                count++;
            }
        }
        if (count != 0) {
            deviceOfRows.push(count);
        }
    }

    for (let i = 0; i < deviceOfRows.length - 1; i++) {
        result += deviceOfRows[i] * deviceOfRows[i + 1];
    }
    return result;
};

// Solution 2
var numberOfBeams2 = function (bank) {
    let ans = 0, temp = 0;
    for (let i = 0; i < bank.length; i++) {
        let n = (bank[i].match(/1/g) || []).length;
        if (n === 0) continue;
        ans += temp * n;
        temp = n;
    }
    return ans;
};

console.log(numberOfBeams(["011001", "000000", "010100", "001000"]));