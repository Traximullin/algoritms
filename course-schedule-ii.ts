function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegree: number[] = new Array(numCourses).fill(0);
  const queue: number[] = [];
  const order: number[] = [];

  for (let pre of prerequisites) {
    const [course, prereq] = pre;
    graph[prereq].push(course);
    inDegree[course]++;
  }

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const course: number = queue.shift()!;
    order.push(course);

    for (let nextCourse of graph[course]) {
      inDegree[nextCourse]--;
      if (inDegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }
  return order.length === numCourses ? order : [];
}
