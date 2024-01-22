/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length;
    const v = new Array(n + 1).fill(0);
    let missing = 0, duplicate = 0;

    for (const num of nums) {
        v[num]++;
    }

    for (let i = 1; i < v.length; i++) {
        if (v[i] === 2) {
            duplicate = i;
        }
        if (v[i] === 0) {
            missing = i;
        }
    }

    return [duplicate, missing];
};

console.log(findErrorNums([1,2,2,4]));