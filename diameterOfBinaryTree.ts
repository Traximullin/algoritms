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
    
    function diameterOfBinaryTree(root: TreeNode | null): number {
        let c = 0;

        function dfs(node: TreeNode | null) {
            if(!node) 
                return 0

            const left_node = dfs(node.left)
            const right_node = dfs(node.right)

            c = Math.max(c, left_node + right_node)

            const length = Math.max(left_node, right_node)

            return length +  1
        }

        dfs(root)

        return c
    };


}