// Solution 1 -> O(n)
const maxProductDifference = (nums) => {
    let firstBig = 0, secondBig = 0;
    let firstSmall = Number.MAX_SAFE_INTEGER, secondSmall = Number.MAX_SAFE_INTEGER;

    // Find big, small value
    for (let num of nums) {
        if (num > firstBig) {
            secondBig = firstBig;
            firstBig = num;
        } else if (num > secondBig) {
            secondBig = num;
        }

        if (num < firstSmall) {
            secondSmall = firstSmall;
            firstSmall = num;
        } else if (num < secondSmall) {
            secondSmall = num;
        }
    }

    return firstBig * secondBig - firstSmall * secondSmall;
}

// Solution 2: Using sort function
const maxProductDifference2 = (nums) => {
    nums.sort((a, b) => a - b);

    return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
}

console.log(maxProductDifference([1,6,7,5,2,4,10,6,4]))