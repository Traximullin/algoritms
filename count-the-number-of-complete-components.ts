function countCompleteComponents(n: number, edges: number[][]): number {
  const adj: number[][] = Array.from({ length: n }, () => []);
  for (let i = 0; i < edges.length; i += 1) {
    const [a, b] = edges[i];
    adj[a].push(b);
    adj[b].push(a);
  }

  const visited: boolean[] = Array.from({ length: n }, () => false);

  const dfs = (u: number): number => {
    const stk: number[] = [u];
    let nodes: number = 0;
    let degreeSum: number = 0;

    while (stk.length > 0) {
      const node = stk.pop();

      if (visited[node]) continue;

      nodes += 1;
      degreeSum += adj[node].length;
      visited[node] = true;

      for (let i = 0; i < adj[node].length; i += 1) {
        const v = adj[node][i];
        if (visited[v]) continue;
        stk.push(v);
      }
    }

    return degreeSum === nodes * (nodes - 1) ? 1 : 0;
  }

  let cnt: number = 0;
  for (let u = 0; u < n; u += 1) {
    if (visited[u]) continue;
    cnt += dfs(u);
  }
  return cnt;
};
