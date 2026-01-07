const maxProduct = (root: TreeNode | null): number => {
    const MOD = 1e9 + 7;
    let totalSum = 0;
    let maxProd = 0;
    
    const calcSum = (node: TreeNode | null): number => {
        if (!node) return 0;
        return node.val + calcSum(node.left) + calcSum(node.right);
    };
    
    const findMaxProduct = (node: TreeNode | null): number => {
        if (!node) return 0;
        
        const leftSum = findMaxProduct(node.left);
        const rightSum = findMaxProduct(node.right);
        const subtreeSum = node.val + leftSum + rightSum;
        
        const otherSum = totalSum - subtreeSum;
        maxProd = Math.max(maxProd, subtreeSum * otherSum);
        
        return subtreeSum;
    };
    
    totalSum = calcSum(root);
    findMaxProduct(root);
    
    return maxProd % MOD;
};

console.log('!!')