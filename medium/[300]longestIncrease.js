/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let tails = new Array(nums.length).fill(0);
    let size = 0;

    for (let x of nums) {
        let i = 0, j = size;
        while (i !== j) {
            let m = Math.floor((i + j) / 2);
            if (tails[m] < x) {
                i = m + 1;
            } else {
                j = m;
            }
        }
        tails[i] = x;
        if (i === size) ++size;
    }
    return size;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));