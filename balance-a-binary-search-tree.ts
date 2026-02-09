const balanceBST = (root: TreeNode | null): TreeNode | null => {
  const sortedValues: number[] = [];

  const inOrderTraversal = (node: TreeNode | null): void => {
    if (!node) return;

    inOrderTraversal(node.left);
    sortedValues.push(node.val);
    inOrderTraversal(node.right);
  };

  const buildBalancedTree = (
    leftIndex: number,
    rightIndex: number,
  ): TreeNode | null => {
    if (leftIndex > rightIndex) return null;

    const middleIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
    const node = new TreeNode(sortedValues[middleIndex]);

    node.left = buildBalancedTree(leftIndex, middleIndex - 1);
    node.right = buildBalancedTree(middleIndex + 1, rightIndex);

    return node;
  };

  inOrderTraversal(root);
  return buildBalancedTree(0, sortedValues.length - 1);
};
