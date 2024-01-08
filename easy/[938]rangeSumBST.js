/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let count = 0;
    if (root == null) return 0;
    if (root.val >= low && root.val <= high) {
        count += root.val;
    }
    count += rangeSumBST(root.left, low, high);
    count += rangeSumBST(root.right, low, high);

    return count;
};