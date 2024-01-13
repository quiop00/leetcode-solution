/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const countCharacter = (str, map) => {
        for(let c of str) {
            map.set(c, map.get(c) ? map.get(c)+ 1: 1);
        }
    }
    let map1 = new Map();
    let map2 = new Map();
    let minStep = 0;
    countCharacter(s, map1);
    countCharacter(t, map2);
    for(let [key,value] of map1) {
        let temp = value - (map2.get(key) ? map2.get(key) : 0);
        if (temp > 0)
        minStep += temp;
    }
    return minStep;
};

console.log(minSteps("bab","aba"))