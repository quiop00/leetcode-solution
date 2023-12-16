// Note Valid for lowcase string
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    // Create two array with length is 26: (alphabel a-z) and fill value 0
    const sTemp = new Array(26).fill(0);
    const tTemp = new Array(26).fill(0);

    // count each string how many time each character appear
    for(let c of s) {
        sTemp[c.charCodeAt(0) - 'a'.charCodeAt(0)]++; 
    }

    for(let c of t) {
        tTemp[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let i = 0; i < 26; i++) {
        if (sTemp[i] != tTemp[i]) {
            return false;
        }
    }
    return true;
};

const s = 'car';
const t = 'rac';

console.log(isAnagram(s,t))