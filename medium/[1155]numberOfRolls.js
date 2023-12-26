/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
    if (target < k * (n - 1)) {
        return 0;
    }
    if (target > k * (n + 1)) {
        return 0;
    }
    if (n == 1) return 1;

    const mod = 10 ** 9 + 7;

    let arr1 = new Array(target + 1).fill(0);  // Current row
    let arr2 = new Array(target + 1).fill(0);  // Previous row

    arr1[0] = 1;

    for (let i = 1; i <= n; ++i) {
        let prev = arr1[0];
        for (let j = 1; j <= target; ++j) {
            arr2[j] = prev;
            prev = (prev + arr1[j]) % mod;
            if (j >= k) {
                prev = (prev - arr1[j - k] + mod) % mod;
            }
        }

        [arr1, arr2] = [arr2, arr1];
        arr2[0] = 0;
    }
    return arr1[target];
};

console.log(numRollsToTarget(2, 6, 7));