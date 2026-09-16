function numberOfSets(n: number, k: number): number {
    const MOD = 1e9 + 7;
    const dp: number[][] = Array(n + 1).fill(null).map(() => Array(k + 1).fill(0));
    const prefixSum: number[][] = Array(n + 1).fill(null).map(() => Array(k + 1).fill(0));

    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        dp[i][0] = 1;
        prefixSum[i][0] = (prefixSum[i - 1][0] + dp[i][0]) % MOD;
    }

    for (let j = 1; j <= k; j++) {
        for (let i = 1; i <= n; i++) {
            dp[i][j] = (dp[i - 1][j] + prefixSum[i - 1][j - 1]) % MOD;

            prefixSum[i][j] = (prefixSum[i - 1][j] + dp[i][j]) % MOD;
        }
    }

    return dp[n][k];
};
