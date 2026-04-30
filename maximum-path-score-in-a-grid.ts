function maxPathScore(grid: number[][], k: number): number {
  const m = grid.length;
  const n = grid[0].length;

  const scoreAdd = [0, 1, 2];
  const costAdd = [0, 1, 1];

  const dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(k + 1).fill(-1)),
  );

  dp[0][0][0] = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let costUsed = 0; costUsed <= k; costUsed++) {
        if (dp[i][j][costUsed] === -1) continue;

        const curScore = dp[i][j][costUsed];

        if (i + 1 < m) {
          const newCost = costUsed + costAdd[grid[i + 1][j]];
          if (newCost <= k) {
            const newScore = curScore + scoreAdd[grid[i + 1][j]];
            dp[i + 1][j][newCost] = Math.max(dp[i + 1][j][newCost], newScore);
          }
        }

        if (j + 1 < n) {
          const newCost = costUsed + costAdd[grid[i][j + 1]];
          if (newCost <= k) {
            const newScore = curScore + scoreAdd[grid[i][j + 1]];
            dp[i][j + 1][newCost] = Math.max(dp[i][j + 1][newCost], newScore);
          }
        }
      }
    }
  }

  let best = -1;
  for (let c = 0; c <= k; c++) {
    best = Math.max(best, dp[m - 1][n - 1][c]);
  }

  return best;
}
