const MODULO = 12345;

function constructProductMatrix(grid: number[][]): number[][] {
  const n = grid.length;
  const m = grid[0].length;
  const productGrid = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0),
  );

  let suffix = 1;
  for (let rowIndex = n - 1; rowIndex >= 0; rowIndex--) {
    for (let colIndex = m - 1; colIndex >= 0; colIndex--) {
      productGrid[rowIndex][colIndex] = suffix;
      suffix = (suffix * grid[rowIndex][colIndex]) % MODULO;
    }
  }

  let prefix = 1;
  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    for (let colIndex = 0; colIndex < m; colIndex++) {
      productGrid[rowIndex][colIndex] =
        (productGrid[rowIndex][colIndex] * prefix) % MODULO;
      prefix = (prefix * grid[rowIndex][colIndex]) % MODULO;
    }
  }

  return productGrid;
}
