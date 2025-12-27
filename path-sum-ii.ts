function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];
  if (!root) return result;

  function dfs(node: TreeNode, currentSum: number, path: number[]): void {
    const newSum = currentSum + node.val;
    const newPath = [...path, node.val];

    const isLeaf = !node.left && !node.right;
    if (isLeaf && newSum === targetSum) {
      result.push(newPath);
      return;
    }

    if (node.left) dfs(node.left, newSum, newPath);
    if (node.right) dfs(node.right, newSum, newPath);
  }

  dfs(root, 0, []);
  return result;
}
