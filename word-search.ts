{
  function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;

    function backtrack(i: number, j: number, index: number): boolean {
      if (index === word.length) {
        return true;
      }
      if (i < 0 || i >= rows || j < 0 || j >= cols) {
        return false;
      }
      if (board[i][j] !== word[index]) {
        return false;
      }

      const tempValueHolder = board[i][j];
      board[i][j] = "#";

      const found =
        backtrack(i + 1, j, index + 1) ||
        backtrack(i - 1, j, index + 1) ||
        backtrack(i, j + 1, index + 1) ||
        backtrack(i, j - 1, index + 1);

      board[i][j] = tempValueHolder;
      return found;
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (backtrack(i, j, 0)) {
          return true;
        }
      }
    }
    return false;
  }
}
