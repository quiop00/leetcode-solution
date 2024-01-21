/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 1) return nums[0];
    const res = new Array(nums.length + 1).fill(0);
    res[1] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        res[i+1] = Math.max(res[i-1] + nums[i], res[i]);
    }
    return res[nums.length];
};

console.log(rob([1, 2, 3, 1]));