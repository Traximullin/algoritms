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

    function sumNumbers(root: TreeNode | null): number {
        const result: string[] = [];

        function dfs(node: TreeNode | null, digits = "") {
            if (!node)
                return null;

            digits += node.val;

            if (!node.left && !node.right) {
                result.push(digits);
                return;
            }

            dfs(node.left, digits);
            dfs(node.right, digits);
        } 

        dfs(root);

        return result.reduce((sum, current) => {
            return sum + parseInt(current);
        }, 0) 
    };

}