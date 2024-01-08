{
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

    function evaluateTree(root: TreeNode | null): boolean {
        
        const dfs = (node: TreeNode | null) => {
            if(node?.left && node?.right) {
                const leftBoolean = dfs(node?.left)
                const rightBoolean = dfs(node?.right)

                return node.val === 3
                    ? leftBoolean && rightBoolean
                    : leftBoolean || rightBoolean
            }

            return node?.val === 1
        }

        return dfs(root!)
    };

    const test = new TreeNode(
        2,
        new TreeNode(1),
        new TreeNode(3, new TreeNode(0), new TreeNode(1))
    )

    console.log(evaluateTree(test))
}