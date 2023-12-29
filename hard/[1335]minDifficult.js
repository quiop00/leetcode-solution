function minDifficulty(jobDifficulty, d) {
    const n = jobDifficulty.length;
    if (n < d) {
        return -1;
    }
    const t = new Array(n + 1).fill(0).map(() => new Array(d + 1).fill(0));
    for (let i = 0; i < n; i++) {
        t[i][1] = Math.max(...jobDifficulty.slice(i));
    }

    // Build the DP table bottom-up
     for (let days = 2; days <= d; days++) {
        for (let i = 0; i <= n - days; i++) {
            let maxDifficulty = Number.MIN_VALUE;
            let result = Number.MAX_VALUE;

            for (let j = i; j <= n - days; j++) {
                maxDifficulty = Math.max(maxDifficulty, jobDifficulty[j]);
                result = Math.min(result, maxDifficulty + t[j + 1][days - 1]);
            }

            t[i][days] = result;
        }
    }

    return t[0][d];
}

console.log(minDifficulty([6, 5, 4, 3, 2, 1], 2));
