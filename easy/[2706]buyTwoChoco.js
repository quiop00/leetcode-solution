// Simple solution
var buyChoco = function (prices, money) {
    prices.sort((a, b) => a - b);
    console.log(prices);
    if (prices[0] + prices[1] - money > 0) return money;
    return money - (prices[0] + prices[1]);
};

console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62))