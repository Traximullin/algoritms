function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  const dfs = (node: TreeNode | null): [TreeNode | null, number] => {
    if (!node) return [null, 0];

    const [leftNode, leftDepth] = dfs(node.left);
    const [rightNode, rightDepth] = dfs(node.right);

    if (leftDepth === rightDepth) {
      return [node, leftDepth + 1];
    }

    if (leftDepth > rightDepth) {
      return [leftNode, leftDepth + 1];
    }

    return [rightNode, rightDepth + 1];
  };

  return dfs(root)[0];
}
