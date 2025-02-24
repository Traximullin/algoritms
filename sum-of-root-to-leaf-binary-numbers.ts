{
    function sumRootToLeaf(root: TreeNode | null): number {
        const sums: string[] = [];

        function dfs(node: TreeNode | null, digits: string) {
            if (!node)
                return;

            digits += node.val;

            if (!node.left && !node.right) {
                sums.push(digits);
                return;
            }

            dfs(node.left, digits);
            dfs(node.right, digits);
        }

        dfs(root, "");

        return sums.reduce((sum, current) => {
            return sum + parseInt(current, 2);
        }, 0)
    };

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

    const test = new TreeNode(
        1,
        new TreeNode(0, new TreeNode(0), new TreeNode(1)),
        new TreeNode(1, new TreeNode(0), new TreeNode(1)),
    )

    console.log(sumRootToLeaf(test))
}