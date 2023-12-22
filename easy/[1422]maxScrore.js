// Simple solution
var maxScore = function(s) {
    let left0 = 0;
    let rigth1 = 0;
    let maxScore = 0;
    // Count 1
    for(let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
          rigth1++;
        }
    }

    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === '0') {
        left0++;
      }
      if (s[i] === '1') {
        rigth1--;
      }
      if (maxScore < (left0 + rigth1)) {
        maxScore = left0 + rigth1;
      }
    }

    return maxScore;
};

console.log(maxScore("011101"));