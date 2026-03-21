function reverseSubmatrix(
  grid: number[][],
  x: number,
  y: number,
  k: number,
): number[][] {
  const m = grid.length;
  const n = grid[0].length;

  if (k === 1) {
    return grid;
  }

  const steps = Math.floor(k / 2);

  for (let i = x; i < x + steps; i++) {
    for (let j = y; j < y + k; j++) {
      const tmp = grid[i][j];
      const swapRowIndex = x + k - 1 - (i - x);

      grid[i][j] = grid[swapRowIndex][j];
      grid[swapRowIndex][j] = tmp;
    }
  }

  return grid;
}
