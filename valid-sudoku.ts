function isValidSudoku(board: string[][]): boolean {
  const seenRows = [...Array(9)].map(() => new Set<string>());
  const seenCols = [...Array(9)].map(() => new Set<string>());
  const seenBoxs = [...Array(9)].map(() => new Set<string>());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const item = board[r][c];
      if (item === ".") continue;
      const boxN = getBox(r, c);

      if (
        seenRows[r].has(item) ||
        seenCols[c].has(item) ||
        seenBoxs[boxN].has(item)
      ) {
        return false;
      }

      seenRows[r].add(item);
      seenCols[c].add(item);
      seenBoxs[boxN].add(item);
    }
  }

  return true;
}

function getBox(r: number, c: number): number {
  const rowBoxIndex = Math.floor(r / 3);
  const colBoxIndex = Math.floor(c / 3);

  return rowBoxIndex * 3 + colBoxIndex;
}
