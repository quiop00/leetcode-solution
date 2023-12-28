function getLength(count) {
    if (count === 1) return 1;
    else if (count < 10) return 2;
    else if (count < 100) return 3;
    else return 4;
}

function getLengthOfOptimalCompression(s, k) {
    const n = s.length;
    const dp = new Array(n + 1).fill(null).map(() => new Array(k + 1).fill(0));

    for (let i = n; i >= 0; i--) {
        for (let j = 0; j <= k; j++) {
            // Base case - initial length declaration
            if (i === n) {
                dp[n][j] = 0;
                continue;
            }

            // Case 1 - delete the ith character if possible (j > 0)
            dp[i][j] = (j > 0) ? dp[i + 1][j - 1] : Number.MAX_SAFE_INTEGER;

            // Case 2 - we keep the ith index.
            // We have to find the current char's index endpoint
            let possible_del = j, count = 0;
            for (let end = i; end < n && possible_del >= 0; end++) {
                // Check about the same char "b b b .." for encoding
                if (s.charAt(end) === s.charAt(i)) {
                    count++;

                    // Assuming the block ends here "aaaa"
                    dp[i][j] = Math.min(dp[i][j], getLength(count) + dp[end + 1][possible_del]);
                } else {
                    // This character should be deleted to make the length min.
                    possible_del--;
                }
            }
        }
    }

    return dp[0][k];
}


console.log(getLengthOfOptimalCompression("aaabcccd", 2));