/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;

    // Create a array that is a merge list from nums1, nums2
    var sortList = new Array(nums1.length + nums2.length).fill(0);

    // Add value to sortList from nums1, nums2 with sorting
    for (let k = 0; k < sortList.length; k++) {
        if (i === nums1.length) {
            sortList[k] = nums2[j];
            j++;
        } else if (j === nums2.length) {
            sortList[k] = nums1[i];
            i++;
        } else {
            if (nums1[i] < nums2[j]) {
                sortList[k] = nums1[i];
                i++;
            } else {
                sortList[k] = nums2[j];
                j++;
            }
        }
    }
    // Find the middle of sorted array
    const mid = Math.floor(sortList.length / 2);
    // Check middle then caculator
    if (sortList.length % 2 === 1) {
        return sortList[mid];
    } else {
        return (sortList[mid - 1] + sortList[mid])/2;
    }
};

console.log(findMedianSortedArrays([1,2],[4,5]));