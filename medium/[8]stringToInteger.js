var myAtoi = function (s) {
    let res = parseInt(s);

    if (isNaN(res)) {
        return 0;
    };

    if (res > Math.pow(2, 31) - 1) {

        return Math.pow(2, 31) - 1;
    } else if (res < -1 * Math.pow(2, 31)) {
        
        return -1 * Math.pow(2, 31);
    } else {
        return res;
    }
};

console.log(myAtoi("-42"));