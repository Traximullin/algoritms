function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length) return null;

  const root = postorder.pop()!;
  const inOrderRootIndex = inorder.findIndex((val) => val === root);
  const inOrderRightBranch = inorder.slice(inOrderRootIndex + 1);
  const inOrderLeftBranch = inorder.slice(0, inOrderRootIndex);

  const tree = new TreeNode(root);
  tree.right = buildTree(inOrderRightBranch, postorder);
  tree.left = buildTree(inOrderLeftBranch, postorder);

  return tree;
}
