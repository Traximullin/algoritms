function minMoves(nums: number[], limit: number): number {
  const n = nums.length;
  const delta = Array(2 * limit + 2).fill(0);

  for (let i = 0; i < n / 2; i++) {
    const a = nums[i];
    const b = nums[n - 1 - i];

    delta[2] += 2;
    delta[Math.min(a, b) + 1] -= 1;
    delta[a + b] -= 1;
    delta[a + b + 1] += 1;
    delta[Math.max(a, b) + limit + 1] += 1;
  }

  let moves = 2 * n;
  let currentMoves = 0;

  for (let i = 2; i <= 2 * limit; i++) {
    currentMoves += delta[i];
    moves = Math.min(moves, currentMoves);
  }

  return moves;
}
