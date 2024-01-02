/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    // => maxRow = 3
    let result = [[]];
    let flag = false;
    for (let num of nums) {
        flag = false;
        for(let i = 0; i < result.length; i++) {
            if (!result[i].includes(num)) {
                result[i].push(num);
                break;
            }
            if (i == result.length - 1) {
                flag = true;
            }
        }
        if (flag) {
            result.push([num]);
        }
    }
    return result;
};

console.log(findMatrix([1,3,4,1,2,3,1]));