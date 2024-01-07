/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let res = 0;
    let map = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        map[i] = new Map();

        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j];
            if (diff <= Number.MIN_SAFE_INTEGER || diff > Number.MAX_SAFE_INTEGER) continue;

            let d = diff;
            let c1 = map[i].get(d) || 0;
            let c2 = map[j].get(d) || 0;
            res += c2;
            map[i].set(d, c1 + c2 + 1);
        }
    }

    return res;
};

console.log([2,4,6,8,10])