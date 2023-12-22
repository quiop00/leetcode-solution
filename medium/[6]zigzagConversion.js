var convert = function (s, numRows) {
    let rowIndex = 0;
    let isIncrease = true;
    // Create array ['',...,''] to save list rows characters
    const rows = new Array(Math.min(numRows, s.length)).fill('');
    if (numRows == 1) {
        return s;
    }
    for (let i = 0; i < s.length; i++) {
        rows[rowIndex] += s[i];

        if (rowIndex == numRows - 1) {
            isIncrease = false;
        }
        if (rowIndex == 0) {
            isIncrease = true;
        }
        if (isIncrease) {
            rowIndex++
        } else {
            rowIndex--;
        }

    }
    return rows.join('');
};

console.log(convert("PAYPALISHIRING", 3))