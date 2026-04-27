function hasValidPath(grid: number[][]): boolean {
  const m = grid.length,
    n = grid[0].length;

  const dirs: Record<number, number[][]> = {
    1: [
      [0, -1],
      [0, 1],
    ],
    2: [
      [-1, 0],
      [1, 0],
    ],
    3: [
      [0, -1],
      [1, 0],
    ],
    4: [
      [0, 1],
      [1, 0],
    ],
    5: [
      [0, -1],
      [-1, 0],
    ],
    6: [
      [0, 1],
      [-1, 0],
    ],
  };

  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  const queue: [number, number][] = [[0, 0]];
  visited[0][0] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift()!;

    if (x === m - 1 && y === n - 1) return true;

    for (const [dx, dy] of dirs[grid[x][y]]) {
      const nx = x + dx,
        ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
      if (visited[nx][ny]) continue;

      // check reverse direction
      for (const [rdx, rdy] of dirs[grid[nx][ny]]) {
        if (nx + rdx === x && ny + rdy === y) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          break;
        }
      }
    }
  }

  return false;
}
