function findMode(root: TreeNode | null): number[] {
  let prev = undefined;
  let maxCount = 0;
  let count = 0;
  let result = [];

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }

    dfs(node.left);

    let curr = node.val;
    if (curr !== prev) {
      count = 0;
      prev = curr;
    }
    count++;

    if (count === maxCount) {
      result.push(curr);
    } else if (count > maxCount) {
      result = [curr];
      maxCount = count;
    }

    dfs(node.right);
  }

  dfs(root);

  return result;
}
