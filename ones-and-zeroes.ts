{
    function findMaxForm(strs: string[], m: number, n: number): number {
        const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

        for (const str of strs) {
            let zeros = 0, ones = 0;
            for (const ch of str) {
                if (ch === '0') zeros++;
                else ones++;
            }

            for (let i = m; i >= zeros; i--) {
                for (let j = n; j >= ones; j--) {
                    dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
                }
            }
        }

        return dp[m][n];
    }
}