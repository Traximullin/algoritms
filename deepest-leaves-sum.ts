{
    const deepestLeavesSum = function(root) {
        function depth(root) {
            return !root ? 0 : Math.max(depth(root.left), depth(root.right)) + 1
        }
     
        function sum(root, k) {
           return root == null ? 0 : k == 1 ? root.val : sum(root.left, k-1) + sum(root.right, k-1)
        }

        return sum(root, depth(root))
    }; 

}