{
    const countNodes = function(root) {
        let count = 0
        
        if(root) {
            return count
        }

        function traverse(node) {
            count += 1

            traverse(node.left)
            traverse(node.right)
        };

        traverse(root)
        
        return count
    };
}