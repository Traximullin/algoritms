function minimumCost(
  source: string,
  target: string,
  original: string[],
  changed: string[],
  cost: number[],
): number {
  const n = source.length;
  const INF = Number.MAX_SAFE_INTEGER;
  const charCount = 26;
  const charCodeOffset = 97;

  const costMatrix = Array.from({ length: charCount }, () =>
    Array(charCount).fill(INF),
  );

  for (let i = 0; i < original.length; i++) {
    const from = original[i].charCodeAt(0) - charCodeOffset;
    const to = changed[i].charCodeAt(0) - charCodeOffset;
    costMatrix[from][to] = Math.min(costMatrix[from][to], cost[i]);
  }

  for (let i = 0; i < charCount; i++) {
    costMatrix[i][i] = 0;
  }

  for (let k = 0; k < charCount; k++) {
    for (let i = 0; i < charCount; i++) {
      for (let j = 0; j < charCount; j++) {
        if (costMatrix[i][k] < INF && costMatrix[k][j] < INF) {
          costMatrix[i][j] = Math.min(
            costMatrix[i][j],
            costMatrix[i][k] + costMatrix[k][j],
          );
        }
      }
    }
  }

  let totalCost = 0;
  for (let i = 0; i < n; i++) {
    const startChar = source[i].charCodeAt(0) - charCodeOffset;
    const endChar = target[i].charCodeAt(0) - charCodeOffset;
    const transformationCost = costMatrix[startChar][endChar];

    if (transformationCost === INF) return -1;
    totalCost += transformationCost;
  }

  return totalCost;
}
