class BSTIterator {
  stack: TreeNode[];
  constructor(root: TreeNode | null) {
    this.stack = [];
    let cur = root;
    while (cur) {
      this.stack.push(cur);
      cur = cur.left;
    }
  }

  next(): number {
    let res = this.stack.pop();
    if (res.right) {
      let cur = res.right;
      while (cur) {
        this.stack.push(cur);
        cur = cur.left;
      }
    }
    return res.val;
  }

  hasNext(): boolean {
    return this.stack.length !== 0;
  }
}
