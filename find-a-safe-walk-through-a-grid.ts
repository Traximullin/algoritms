function findSafeWalk(grid: number[][], health: number): boolean {
  const rows = grid.length;
  const cols = grid[0].length;

  const maxHealth = new Array(rows)
    .fill(undefined)
    .map(() => new Array(cols).fill(-1));

  const stack = [[0, 0, health]] as number[][];

  while (stack.length > 0) {
    let [r, c, remainingHealth] = stack.pop()!;
    remainingHealth -= grid[r][c];

    if (remainingHealth <= maxHealth[r][c]) continue;
    maxHealth[r][c] = remainingHealth;

    if (r === rows - 1 && c === cols - 1 && remainingHealth > 0) return true;
    if (remainingHealth <= 0) continue;

    if (r > 0) stack.push([r - 1, c, remainingHealth]);
    if (r < rows - 1) stack.push([r + 1, c, remainingHealth]);
    if (c < cols - 1) stack.push([r, c + 1, remainingHealth]);
    if (c > 0) stack.push([r, c - 1, remainingHealth]);
  }

  return false;
}
