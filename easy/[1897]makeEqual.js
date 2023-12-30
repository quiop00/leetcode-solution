/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    // Check the valid words
    if (words.length === 1) {
        return true;
    }

    let totalCharCount = 0;
    for (const s of words) {
        totalCharCount += s.length;
    }

    if (totalCharCount % words.length !== 0) {
        return false;
    }

    let map = {};
    for(let w of words) {
        if(w.length > 0) {
            for(let c of w) {
                if (map[c]) {
                    map[c]++;
                } else {
                    map[c] = 1;
                }
            }
        }
    }
    for(let key in map) {
        if (map[key] % words.length !== 0) {
            return false;
        }
    }
    return true;
};

console.log(makeEqual(["abc","aabc","bc"]));