{
    const amountOfTime = function(root, start) {
        let result = 0;

        const dfs = function(node, start){
            if(node == null) return 0;

            let leftDepth = dfs(node.left, start);
            let rightDepth = dfs(node.right, start);

            if(node.val == start){
                result = Math.max(leftDepth, rightDepth);
                return -1;
            }
            else if(leftDepth >= 0 && rightDepth >= 0)
                return Math.max(leftDepth, rightDepth)+1;
            
            result = Math.max(result, Math.abs(leftDepth - rightDepth));
            return Math.min(leftDepth, rightDepth) - 1;
        };

        dfs(root, start);

        return result;
    };


}