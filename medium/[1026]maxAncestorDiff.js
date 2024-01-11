/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    let diff = -Infinity;

    function traverse(node, max, min){
        if (!node) {
            const newDiff = max - min;
            
            if (diff < newDiff) diff = newDiff;
            
            return;
        }

        const { val, left, right } = node;

        if (val > max) max = val;

        if (val < min) min = val;

        traverse(left, max, min);
        traverse(right, max, min);
    }

    const { val } = root;
    traverse(root, val, val);

    return diff;
};