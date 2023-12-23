var reverse = function (x) {
    let reverseNum = 0;
    const prefix = x < 0 ? -1 : 1;
    x = Math.abs(x);
    while (x > 0) {
        if (reverseNum > (Math.pow(2, 31) - 1) / 10) {
            return 0;
        }
        reverseNum = reverseNum * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return prefix * reverseNum;
};

console.log(reverse(123));