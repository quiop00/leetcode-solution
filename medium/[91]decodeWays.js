/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const temp = new Array(s.length + 1).fill(0);
  temp[s.length] = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == 0) continue;
    temp[i] = temp[i + 1];
    if (s[i] <= 26 
        || (i < s.length - 2 && s[i] + s[i + 1] <= 26)) {
      temp[i] += temp[i + 2];
    }
  }

  return temp[0];
};

console.log(numDecodings("12"))