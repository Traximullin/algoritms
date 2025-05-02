{
    function getSum(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
    
        return node.val + getSum(node.left) + getSum(node.right);
    }
    
    function findTilt(root: TreeNode | null): number {
        if (root === null) {
            return 0;
        }
    
        const leftSum = getSum(root.left);
        const rightSum = getSum(root.right);
    
        const tilt = Math.abs(leftSum - rightSum);
    
        return tilt + findTilt(root.left) + findTilt(root.right);
    };
}