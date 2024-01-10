function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {

    let map = new Map();

    var convertToGraph = (current, parent, map) => {
        if (current === null) {
            return;
        }
        if (!map.has(current.val)) {
            map.set(current.val, new Set());
        }
        const adjacentList = map.get(current.val);
        if (parent !== 0) {
            adjacentList.add(parent);
        }
        if (current.left !== null) {
            adjacentList.add(current.left.val);
        }
        if (current.right !== null) {
            adjacentList.add(current.right.val);
        }
        convertToGraph(current.left, current.val, map);
        convertToGraph(current.right, current.val, map);
    }

    convertToGraph(root, 0, map);

    const q = [];
    q.push(start);
    let minute = 0;
    const visited = new Set();
    visited.add(start);

    while (q.length > 0) {
        let levelSize = q.length;
        while (levelSize > 0) {
            const current = q.shift();

            for (const num of map.get(current)) {
                if (!visited.has(num)) {
                    visited.add(num);
                    q.push(num);
                }
            }
            levelSize--;
        }
        minute++;
    }
    return minute - 1;


};

// Tạo một mảng để lưu trữ các nút
const nodes = [
    new TreeNode(1), new TreeNode(5), new TreeNode(3),
    new TreeNode(4), new TreeNode(9), new TreeNode(2),
    new TreeNode(10), new TreeNode(6)
];

// Gán các liên kết giữa các nút dựa trên chỉ số của mảng
nodes[0].left = nodes[1];
nodes[0].right = nodes[2];
nodes[1].right = nodes[3];
nodes[2].left = nodes[6];
nodes[2].right = nodes[7];
nodes[3].left = nodes[4];
nodes[3].right = nodes[5];

const root = nodes[0];

console.log(amountOfTime(root, 3))