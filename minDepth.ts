{
    const minDepth = function(root) {
        const dfs = (root) => {
            if(!root) {
                return 0
            }

            if(root.left === null) {
                return 1 + dfs(root.right)
            }

            if(root.right === null) {
                return 1 + dfs(root.left)
            }

            return 1 + Math.min(dfs(root.left), dfs(root.right))
        }

        return dfs(root)
    }

}