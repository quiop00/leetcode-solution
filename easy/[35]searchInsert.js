var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    // Use binary search
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    // Nums at mid > target, position of target is mid
    // else target > value of mid -> position of target is mid + 1
    if (nums[mid] > target) return mid;
    return mid + 1;
};

console.log(searchInsert([1, 3, 5, 6], 5))