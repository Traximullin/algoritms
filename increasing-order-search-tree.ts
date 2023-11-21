{
    class TreeNode {}

    const increasingBST = function(root) {
        let tree = new TreeNode(null);
    
        let prev = tree;

        const dfs = (node) => {
            if(!node)
                return

            dfs(node.left)

            prev.right = node
            node.left = null
            prev = node

            dfs(node.right)
        }

        dfs(root)

        return tree.right
    };

    
}