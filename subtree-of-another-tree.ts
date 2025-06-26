{
    function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

        function subTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
            if (root == null && subRoot == null) {
                return true;
            }

            if (root == null || subRoot == null) {
                return false;
            }

            return root.val === subRoot.val && 
                    subTree(root.left, subRoot.left) &&
                    subTree(root.right, subRoot.right);
        }

        if (subRoot == null) {
            return true;
        }

        if (root == null) {
            return false;
        }

        if (subTree(root, subRoot)) {
            return true;
        }
        
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    };
}