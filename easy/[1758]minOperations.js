/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0 && s[i] === '0' || i % 2 === 1 && s[i] === '1') {
      continue;
    }
    count++;
  }
  max = count;
  count = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0 && s[i] === '1' || i % 2 === 1 && s[i] === '0') {
      continue;
    }
    count++;
  }

  return max > count ? count : max;
};

console.log("1100010111")