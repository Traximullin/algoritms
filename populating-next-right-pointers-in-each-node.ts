function connect(root: Node | null): Node | null {
  if (!root) {
    return null;
  }

  const q = [];
  q.push(root);

  while (q.length > 0) {
    const qLen = q.length;
    const level = [];

    for (let i = 0; i < qLen; i++) {
      const node = q.shift();

      if (node.left && node.right) {
        q.push(node.left, node.right);
        level.push(node.left, node.right);
      }
    }

    for (let i = 0; i < level.length - 1; i++) {
      const node = level[i];
      node.next = level[i + 1];
    }
  }

  return root; 
};