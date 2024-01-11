{
    const maxAncestorDiff = function(root) {
        function dfs(node, minVal, maxVal) {
            if (!node) 
                return maxVal - minVal;
    
            minVal = Math.min(minVal, node.val);
            maxVal = Math.max(maxVal, node.val);
    
            const leftDiff = dfs(node.left, minVal, maxVal);
            const rightDiff = dfs(node.right, minVal, maxVal);
    
            return Math.max(leftDiff, rightDiff);
        }
    
        return dfs(root, root.val, root.val);
    };
}