function shiftGrid(grid: number[][], k: number): number[][] {
  const rows = grid.length;
  const cols = grid[0].length;
  const total = rows * cols;

  const shift = k % total;
  if (shift === 0) return grid;

  const res = Array.from({ length: rows }, () => new Array(cols).fill(0));
  const flat = grid.flat();
  const rotated = [...flat.slice(-shift), ...flat.slice(0, -shift)];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      res[i][j] = rotated[i * cols + j];
    }
  }

  return res;
}
