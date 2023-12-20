var longestPalindrome = function(s) {
    let i = 0;
    let j = 0;
    let longest = s[0];
    let temp = '';
    // Check for case: "xccx"
    for(let k = 0; k < s.length - 1; k++) {
      i = k;
      j = k;
      temp = s[k];
      if (s[k] == s[k+1]) {
        temp += s[k+1];
        i--;
        j+=2; 
      }
      while(((i >= 0 && j < s.length) && s[i] === s[j])) {
        if (i !== j) {
          if (temp.length < (s[i]+ temp + s[j]).length) {
            temp = s[i]+ temp + s[j];
           }
        }
        j++;
        i--;
      }
      if (temp.length > longest.length) {
        longest = temp;
      }
    }
    // Check for case "xcx"
    for(let k = 0; k < s.length - 1; k++) {
      i = k;
      j = k;
      temp = s[k];
      while(((i >= 0 && j < s.length) && s[i] === s[j])) {
        if (i !== j) {
          if (temp.length < (s[i]+ temp + s[j]).length) {
            temp = s[i]+ temp + s[j];
           }
        }
        j++;
        i--;
      }
      if (temp.length > longest.length) {
        longest = temp;
      }
    }
    return longest;
};

console.log(longestPalindrome('cbbd'))