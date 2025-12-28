function countNegatives(grid: number[][]): number {
  let negatives = 0;

  let [maxR, maxC] = [grid.length, grid[0].length];

  for (let r = 0; r < maxR; r++) {
    for (let c = 0; c < maxC; c++) {
      const elem = grid[r][c];

      if (elem < 0) {
        negatives += (maxC - c) * (maxR - r);
        maxC = c;
        break;
      }
    }
  }

  return negatives;
}
