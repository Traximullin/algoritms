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

    function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
        const result: number[] = [];

        function dfs(node: TreeNode | null) {
            if (!node) {
                return;
            }

            dfs(node?.left);
            dfs(node?.right);
        
            if (!Number.isNaN(node.val)) {
                result.push(node.val)
            }
        }

        dfs(root1)
        dfs(root2)

        return result.sort((a,b) => a - b)
    };

    const test_1 = new TreeNode(
        2,
        new TreeNode(1),
        new TreeNode(4)
    )

    const test_2 = new TreeNode(
        1,
        new TreeNode(0),
        new TreeNode(3)
    )

    console.log(getAllElements(test_1, test_2))
}