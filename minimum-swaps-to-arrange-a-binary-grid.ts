function minSwaps(grid: number[][]): number {
  const n = grid.length;
  const indexes = grid.map((row) => row.lastIndexOf(1));

  let ans = 0;

  for (let i = 0; i < n; ++i) {
    if (indexes[i] <= i) continue;

    let j = i + 1;

    while (j < n && indexes[j] > i) ++j;

    if (j === n) return -1;

    ans += j - i;

    while (j > i) {
      indexes[j] = indexes[j - 1];
      --j;
    }
  }

  return ans;
}
