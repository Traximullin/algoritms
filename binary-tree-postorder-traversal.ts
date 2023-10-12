{
    const postorderTraversal = function(root) {
        const result = []
    
        const traversal = (node) => {
            if(!node) 
                return 

            traversal(node.left)
            traversal(node.right)
            
            result.push(node.val)
        }

        traversal(root)

        return result
    };
}