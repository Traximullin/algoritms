{
    function kthSmallest(root: TreeNode | null, k: number): number {
        const stack: TreeNode[] = [];
        let current: TreeNode | null = root;
        let count = 0;
        
        while (stack.length > 0 || current !== null) {
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop()!;
            count++;

            if (count === k) {
                return current.val;
            }

            current = current.right;
        }
        return -1;    
    };
}