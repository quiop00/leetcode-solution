function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let arr1 = new Array();
    let arr2 = new Array();
    arr1 = findLeaf(root1);
    arr2 = findLeaf(root2);
    return JSON.stringify(arr1) == JSON.stringify(arr2);
};

var findLeaf = function(root) {
    let arr = [];
    if (root == null) {
        return arr;
    }
    if (root.left == null && root.right == null) {
        arr.push(root.val);
        return arr;
    }
    arr.push(...findLeaf(root.left));
    arr.push(...findLeaf(root.right));
    return arr;
};

// Tạo một mảng để lưu trữ các nút
const nodes = [
    new TreeNode(3), new TreeNode(5), new TreeNode(1),
    new TreeNode(6), new TreeNode(2), new TreeNode(9),
    new TreeNode(8), null, null, new TreeNode(7), new TreeNode(4)
  ];
  
  // Gán các liên kết giữa các nút dựa trên chỉ số của mảng
  nodes[0].left = nodes[1];
  nodes[0].right = nodes[2];
  nodes[1].left = nodes[3];
  nodes[1].right = nodes[4];
  nodes[2].left = nodes[5];
  nodes[2].right = nodes[6];
  nodes[4].left = nodes[9];
  nodes[4].right = nodes[10];
  
  
  const root = nodes[0];

  console.log()