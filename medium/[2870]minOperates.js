/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const map = new Map();
    for(let num of nums) {
        if (map.get(num)) {
            map.set(num, map.get(num)+1);
        } else {
            map.set(num, 1);
        }
    }
    let count = 0;
    for(let value of map.values()) {
        if (value == 1) return -1;
        count += Math.floor(value / 3);
        if (value % 3 !== 0) count++;
    }
    return count;
};

console.log(minOperations([2,3,3,2,2,4,2,3,4]))