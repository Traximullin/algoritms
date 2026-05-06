function rotateTheBox(boxGrid: string[][]): string[][] {
  const n = boxGrid.length;
  const m = boxGrid[0].length;

  for (let i = 0; i < n; i++) {
    let last = m - 1;

    for (let j = m - 1; j >= 0; j--) {
      switch (boxGrid[i][j]) {
        case "#":
          const tmp = boxGrid[i][j];
          boxGrid[i][j] = boxGrid[i][last];
          boxGrid[i][last] = tmp;

          last = last - 1;
          break;
        case ".":
          break;
        case "*":
          last = j - 1;
          break;
      }
    }
  }

  const result: string[][] = Array.from({ length: m }, () => Array(n).fill(""));

  for (let i = 0; i < m; i++) {
    for (let j = n - 1; j >= 0; j--) {
      result[i][n - j - 1] = boxGrid[j][i];
    }
  }

  return result;
}
