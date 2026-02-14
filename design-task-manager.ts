type Item = {
  userId: number;
  taskId: number;
  priority: number;
};

class TaskManager {
  pq: PriorityQueue<Item>;
  map: Map<number, Item>;

  constructor(tasks: number[][]) {
    const comparator = (a: Item, b: Item) => {
      if (a.priority !== b.priority) {
        return b.priority - a.priority;
      }
      return b.taskId - a.taskId;
    };
    this.pq = new PriorityQueue(comparator);
    this.map = new Map();
    for (const task of tasks) {
      const item = { userId: task[0], taskId: task[1], priority: task[2] };
      this.pq.enqueue(item);
      this.map.set(item.taskId, item);
    }
  }

  add(userId: number, taskId: number, priority: number): void {
    const item = { userId, taskId, priority };
    this.pq.enqueue(item);
    this.map.set(taskId, item);
  }

  edit(taskId: number, newPriority: number): void {
    const oldItem = this.map.get(taskId);
    if (oldItem) {
      const newItem = {
        userId: oldItem.userId,
        taskId: oldItem.taskId,
        priority: newPriority,
      };
      this.map.set(taskId, newItem);
      this.pq.enqueue(newItem);
    }
  }

  rmv(taskId: number): void {
    this.map.delete(taskId);
  }

  execTop(): number {
    while (this.pq.size() > 0) {
      const { userId, taskId, priority } = this.pq.dequeue();
      const currentItem = this.map.get(taskId);
      if (
        currentItem &&
        currentItem.userId === userId &&
        currentItem.priority === priority
      ) {
        this.map.delete(taskId);
        return userId;
      }
    }
    return -1;
  }
}
