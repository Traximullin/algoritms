{
    function findSecondMinimumValue(root: TreeNode | null): number {
        const maxInt = Number.MAX_SAFE_INTEGER;
        const minimums: number[] = [root.val, maxInt];
        
        inOrderTraversal(root, minimums);
        return minimums[1] === maxInt ? -1 : minimums[1];
    };

    const inOrderTraversal = (root: TreeNode, minimums: number[]) => {
        if (root != null) {
            if (root.val > minimums[0] && root.val < minimums[1]) minimums[1] = root.val;
            inOrderTraversal(root.left, minimums);
            inOrderTraversal(root.right, minimums);
        }

    };
}