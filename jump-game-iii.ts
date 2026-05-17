function canReach(arr: number[], start: number): boolean {
  const visitedIdxs = new Set();

  const dfs = (idx) => {
    if (arr[idx] == undefined) {
      return false;
    }

    if (arr[idx] == 0) {
      return true;
    }

    if (visitedIdxs.has(idx)) {
      return false;
    }

    visitedIdxs.add(idx);

    return dfs(idx - arr[idx]) || dfs(idx + arr[idx]);
  };

  return dfs(start);
}
