var isPathCrossing = function (path) {
    let map = new Map();
    map.set('0,0', 1);
    let currentX = 0;
    let currentY = 0;
    for (let c of path) {
        if (c === 'N') {
            currentY++;
        }
        if (c === 'S') {
            currentY--;
        }
        if (c === 'E') {
            currentX++;
        }
        if (c === 'W') {
            currentY--;
        }
        if (map.has(currentX + ',' + currentY)) {
            return true;
        } else {
            map.set(currentX + ',' + currentY, 1)
        }
    }
    return false;
};

console.log(isPathCrossing("NNSWWEWSSESSWENNW"))