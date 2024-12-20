{
    function reverseOddLevels(root: TreeNode | null, depth = 0): TreeNode | null {
        helper(root.left, root.right, 0);
        return root;
    };
    
    function helper(left, right, depth) {
        if (!left || !right) {
            return;
        }
    
        if (depth % 2 === 0) {
            const temp = left.val;
            left.val = right.val;
            right.val = temp;
        }
    
        helper(left.left, right.right, depth + 1);
        helper(left.right, right.left, depth + 1);
    }
}