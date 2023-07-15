{
    /*
        !TODO 
        https://leetcode.com/problems/binary-tree-inorder-traversal/
    */

    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */

    function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
    }

    const inorderTraversal = function(root) {
        const stack = []
        const res = []

        while(root || stack.length) {
            if(root) {
                stack.push(root)
                root = root.left
            } else {
                root = stack.pop()
                res.push(root.val)
                root = root.right
            }
        }

        return res
    };

    const node2 = new TreeNode(2,3,null)
    const node1 = new TreeNode(1,null, node2)

    console.log(inorderTraversal(node1))
}