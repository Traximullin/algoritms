{
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

    const maxDepth = function(root) {
        if(root === null) return 0

        let leftNode = maxDepth(root.left)
        let rightNode = maxDepth(root.right)
    
        return Math.max(leftNode,rightNode) + 1
    };

}