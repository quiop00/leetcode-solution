/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    let xAxises = [];
    let maxWidth = 0;
    for (let i = 0; i < points.length; i++) {
        xAxises.push(points[i][0]);
    }
    xAxises.sort((a, b) => a - b);

    for (let i = 1 ; i < xAxises.length; i++) {
        if (xAxises[i] - xAxises[i -1] > maxWidth) {
            maxWidth = xAxises[i] - xAxises[i -1];
        }
    }

    return maxWidth;
};

console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]]));