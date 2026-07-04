function minScore(n: number, roads: number[][]): number {
  const graph = new Map<number, number[][]>();
  roads.forEach(([city1, city2, distance]) => {
    if (!graph.has(city1)) graph.set(city1, []);
    if (!graph.has(city2)) graph.set(city2, []);
    graph.get(city1).push([city2, distance]);
    graph.get(city2).push([city1, distance]);
  });

  const queue = new Array(n),
    visited = new Array(n + 1).fill(false);
  visited[1] = true;
  queue[0] = 1;
  let tail = 0,
    head = 1,
    minDistance = Number.MAX_VALUE;
  while (tail < head) {
    graph.get(queue[tail++]).forEach(([city2, distance]) => {
      minDistance = Math.min(minDistance, distance);
      if (!visited[city2]) {
        visited[city2] = true;
        queue[head++] = city2;
      }
    });
  }
  return minDistance;
}
