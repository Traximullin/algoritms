{
    const preorderTraversal = function(root) {
        const target = []
    
        const dfs = (node) => {
            if (!node){
                return;
            }

            target.push(node.val)
            
            dfs(node.left)
            dfs(node.right)
        }

        dfs(root)
        
        return target
    };
}